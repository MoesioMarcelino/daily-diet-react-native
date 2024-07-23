import { MealGroup } from "@models";

export function calculateDietStats(mealGroups: MealGroup[]): number {
  const { totalMeals, inDietCount } = mealGroups.reduce(
    (acc, group) => {
      const { totalMeals, inDietCount } = group.meals.reduce(
        (mealAcc, meal) => {
          mealAcc.totalMeals++;
          if (meal.inDiet) {
            mealAcc.inDietCount++;
          }
          return mealAcc;
        },
        { totalMeals: 0, inDietCount: 0 }
      );

      acc.totalMeals += totalMeals;
      acc.inDietCount += inDietCount;

      return acc;
    },
    { totalMeals: 0, inDietCount: 0 }
  );

  const inDietPercentage =
    totalMeals > 0 ? (inDietCount / totalMeals) * 100 : 0;

  const percentage = parseFloat(inDietPercentage.toFixed(2));

  return percentage;
}
