import { TouchableOpacityProps } from "react-native";
import {
  Container,
  ContentContainer,
  Divider,
  Status,
  Time,
  Title,
} from "./styles";

export type Meal = {
  id: string;
  time: string;
  title: string;
  isInDiet: boolean;
};

export type MealCardProps = Meal & TouchableOpacityProps;

export function MealCard({ time, title, isInDiet, ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <ContentContainer>
        <Time>{time}</Time>
        <Divider />
        <Title numberOfLines={1}>{title}</Title>
      </ContentContainer>
      <Status isInDiet={isInDiet} />
    </Container>
  );
}
