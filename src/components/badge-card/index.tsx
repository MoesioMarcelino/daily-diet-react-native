import { TouchableOpacityProps } from "react-native";
import { Badge, Container, Label } from "./styles";

type BadgeCardProps = {
  label: string;
  selected: boolean;
  variant?: "success" | "failure";
} & TouchableOpacityProps;

export function BadgeCard({
  label,
  selected,
  variant = "success",
  ...rest
}: BadgeCardProps) {
  return (
    <Container variant={variant} selected={selected} {...rest}>
      <Badge variant={variant} />
      <Label>{label}</Label>
    </Container>
  );
}
