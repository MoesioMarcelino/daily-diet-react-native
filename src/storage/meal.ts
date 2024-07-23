import { Meal, MealGroup } from "@models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sortMealGroups } from "@utils";
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
