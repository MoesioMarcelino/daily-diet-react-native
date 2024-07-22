import { useNavigation } from "@react-navigation/native";
import { ViewProps } from "react-native";
import { Container, Icon, Subtitle, Title } from "./styles";

export type ResultProps = {
  variant?: "success" | "error";
} & ViewProps;

export function Result({ variant = "success", ...rest }: ResultProps) {
  const navigation = useNavigation();

  function handleGoToResults() {
    navigation.navigate("results");
  }

  return (
    <Container variant={variant} onPress={handleGoToResults} {...rest}>
      <Icon variant={variant} />
      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
