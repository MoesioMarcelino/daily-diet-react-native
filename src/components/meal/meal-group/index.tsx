import { ViewProps } from "react-native";
import { Meal, MealCard } from "../meal-card";
import { Container, Title } from "./styles";

export type MealGroup = {
  title: string;
  meals: Meal[];
};

export type MealGroupProps = MealGroup & ViewProps;

export function MealGroupComponent({ title, meals, ...rest }: MealGroupProps) {
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
        />
      ))}
    </Container>
  );
}
