import { MealGroup } from "@models";
import { useNavigation } from "@react-navigation/native";
import { ViewProps } from "react-native";
import { MealCard } from "../meal-card";
import { Container, Title } from "./styles";

export type MealGroupProps = MealGroup & ViewProps;

export function MealGroupComponent({
  date: title,
  meals,
  ...rest
}: MealGroupProps) {
  const navigation = useNavigation();

  function handleViewMeal(mealId: string) {
    navigation.navigate("view-meal", {
      mealId,
    });
  }

  return (
    <Container {...rest}>
      <Title>{title}</Title>

      {meals.map(({ id, isInDiet, time, title }) => (
        <MealCard
          key={id}
          id={id}
          isInDiet={isInDiet}
          time={time}
          title={title}
          onPress={() => handleViewMeal(id)}
        />
      ))}
    </Container>
  );
}
