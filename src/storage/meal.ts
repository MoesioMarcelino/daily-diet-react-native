import { MealGroup } from "@models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../contants";

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
    const meals: MealGroup[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    throw error;
  }
}
