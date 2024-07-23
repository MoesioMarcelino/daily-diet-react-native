import { MealGroup } from "@models";

function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

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
