import { MealGroup } from "./meal-group";
import { Variant } from "./variant";

export type MealResult = {
  percentage: number;
  variant: Variant;
  total: number;
  totalInDiet: number;
  totalOutDiet: number;
  meals: MealGroup[];
};
