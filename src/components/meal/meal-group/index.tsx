import { MealGroup } from "@models";
import { formatDateToDDMMYY } from "@utils";
import { ViewProps } from "react-native";
import { MealCard } from "../meal-card";
import { Container, Title } from "./styles";

export type MealGroupProps = MealGroup & ViewProps;

export function MealGroupComponent({ date, meals, ...rest }: MealGroupProps) {
  const formattedTitle = formatDateToDDMMYY(date);

  return (
    <Container {...rest}>
      <Title>{formattedTitle}</Title>

      {meals.map((meal) => (
        <MealCard key={meal.id} {...meal} />
      ))}
    </Container>
  );
}
