import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, NewMeal, Results } from "@screens";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="results" component={Results} />
      <Screen name="new-meal" component={NewMeal} />
    </Navigator>
  );
}
