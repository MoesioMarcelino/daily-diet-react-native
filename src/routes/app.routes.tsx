import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CreateMeal,
  EditMeal,
  Home,
  RegisterMealDone,
  Results,
  ViewMeal,
} from "@screens";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="results" component={Results} />
      <Screen name="create-meal" component={CreateMeal} />
      <Screen name="register-meal-done" component={RegisterMealDone} />
      <Screen name="view-meal" component={ViewMeal} />
      <Screen name="edit-meal" component={EditMeal} />
    </Navigator>
  );
}
