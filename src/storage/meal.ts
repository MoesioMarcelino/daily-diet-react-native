import { Meal, MealGroup, MealResult, Variant } from "@models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError, calculateDietStats, sortMealGroups } from "@utils";
import uuid from "react-native-uuid";
import { MEALS_COLLECTION } from "../contants";

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
    const meals: MealGroup[] = storage ? JSON.parse(storage) : [];
    const sortedMeals = sortMealGroups(meals);
    return sortedMeals;
  } catch (error) {
    throw error;
  }
}

export async function getMealByDate(mealDate: string) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
    const storageParsed: MealGroup[] = storage ? JSON.parse(storage) : [];

    return storageParsed.find(({ date }) => date === mealDate);
  } catch (error) {
    throw error;
  }
}

export async function createMeal(meal: Omit<Meal, "id">) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
    const mealParsed: MealGroup[] = storage ? JSON.parse(storage) : [];

    const mealGroupAlreadyExists = await getMealByDate(meal.date);

    if (mealGroupAlreadyExists) {
      mealGroupAlreadyExists.meals.push({
        id: uuid.v4().toString(),
        ...meal,
      });

      const updatedMealList = mealParsed.map((group) =>
        group.date === meal.date ? mealGroupAlreadyExists : group
      );

      await AsyncStorage.setItem(
        MEALS_COLLECTION,
        JSON.stringify(updatedMealList)
      );
    } else {
      const newMeal: Meal = {
        id: uuid.v4().toString(),
        ...meal,
      };
      const newMealList: MealGroup[] = [
        ...mealParsed,
        { date: meal.date, meals: [newMeal] },
      ];

      await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(newMealList));
    }
  } catch (error) {
    throw error;
  }
}

export async function getMealDetails(): Promise<MealResult> {
  try {
    const meals = await getAllMeals();
    const { total, totalInDiet, totalOutDiet } = meals.reduce(
      (acc, group) => {
        const { totalMeals, inDietCount, outDietCount } = group.meals.reduce(
          (mealAcc, meal) => {
            mealAcc.totalMeals++;
            if (meal.inDiet) {
              mealAcc.inDietCount++;
            } else {
              mealAcc.outDietCount++;
            }
            return mealAcc;
          },
          { totalMeals: 0, inDietCount: 0, outDietCount: 0 }
        );

        acc.total += totalMeals;
        acc.totalInDiet += inDietCount;
        acc.totalOutDiet += outDietCount;

        return acc;
      },
      { total: 0, totalInDiet: 0, totalOutDiet: 0 }
    );

    const percentage = calculateDietStats(meals);
    const variant: Variant = percentage >= 70 ? "success" : "failure";

    return {
      total,
      totalInDiet,
      totalOutDiet,
      percentage,
      variant,
      meals,
    };
  } catch (error) {
    throw error;
  }
}

export async function getMealById(date: string, mealId: string): Promise<Meal> {
  try {
    const mealGroup = await getMealByDate(date);

    if (!mealGroup) {
      throw new AppError("Refeição não encontrada");
    }

    const meal = mealGroup.meals.find((meal) => meal.id === mealId);

    if (!meal) {
      throw new AppError("Refeição não encontrada");
    }

    return meal;
  } catch (error) {
    throw error;
  }
}
