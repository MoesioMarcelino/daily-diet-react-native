import { ViewProps } from "react-native";
import { Container, Icon, IconTouchable, Subtitle, Title } from "./styles";

export type ResultProps = {
  variant?: "success" | "error";
} & ViewProps;

export function Result({ variant = "success", ...rest }: ResultProps) {
  return (
    <Container variant={variant} {...rest}>
      <IconTouchable>
        <Icon variant={variant} />
      </IconTouchable>
      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}
