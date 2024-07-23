import { useNavigation } from "@react-navigation/native";
import { ViewProps } from "react-native";
import { Container, Icon, Subtitle, Title } from "./styles";

export type ResultProps = { result: number } & ViewProps;

export function Result({ result, ...rest }: ResultProps) {
  const navigation = useNavigation();

  const variant = result >= 70 ? "success" : "failure";

  function handleGoToResults() {
    navigation.navigate("results");
  }

  return (
    <Container variant={variant} onPress={handleGoToResults} {...rest}>
      <Icon variant={variant} />
      <Title>{result}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
