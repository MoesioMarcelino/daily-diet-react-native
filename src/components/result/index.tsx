import { MealResult } from "@models";
import { useNavigation } from "@react-navigation/native";
import { ViewProps } from "react-native";
import { Container, Icon, Subtitle, Title } from "./styles";

export type ResultProps = MealResult & ViewProps;

export function Result({ percentage, variant, ...rest }: ResultProps) {
  const navigation = useNavigation();

  function handleGoToResults() {
    navigation.navigate("results");
  }

  return (
    <Container variant={variant} onPress={handleGoToResults} {...rest}>
      <Icon variant={variant} />
      <Title>{percentage}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
