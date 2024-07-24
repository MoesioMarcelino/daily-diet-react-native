import { Meal } from "@models";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  ContentContainer,
  Divider,
  Status,
  Time,
  Title,
} from "./styles";

export type MealCardProps = Meal & TouchableOpacityProps;

export function MealCard({
  time,
  name,
  inDiet,
  date,
  id,
  ...rest
}: MealCardProps) {
  const navigation = useNavigation();

  function handleViewMeal() {
    navigation.navigate("view-meal", {
      mealId: id,
      date,
    });
  }

  return (
    <Container onPress={handleViewMeal} {...rest}>
      <ContentContainer>
        <Time>{time}</Time>
        <Divider />
        <Title numberOfLines={1}>{name}</Title>
      </ContentContainer>
      <Status inDiet={inDiet} />
    </Container>
  );
}
