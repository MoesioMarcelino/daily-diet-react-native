import { MealGroup } from "@models";
import { parseDate } from "./format-date";

export function sortMealGroups(mealGroups: MealGroup[]): MealGroup[] {
  return mealGroups
    .map((group) => ({
      ...group,
      meals: group.meals.sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        const timeA = a.time;
        const timeB = b.time;
        return dateA.getTime() - dateB.getTime() || timeA.localeCompare(timeB);
      }),
    }))
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateA.getTime() - dateB.getTime();
    });
}
