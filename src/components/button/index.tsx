import * as PhophorIcon from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Text } from "./styles";

type Variant = { variant?: "primary" | "secondary" };
export type ButtonIcon = "plus";

export type ButtonProps = {
  label: string;
  icon?: ButtonIcon;
} & Variant &
  TouchableOpacityProps;

export function Button({
  variant = "primary",
  label,
  icon,
  ...rest
}: ButtonProps) {
  const { SIZES, COLORS } = useTheme();

  function getIcon(icon?: ButtonIcon) {
    const size = SIZES.LG;
    const color =
      variant === "primary" ? COLORS.BASE.WHITE : COLORS.BASE.GRAY_100;

    switch (icon) {
      case "plus":
        return <PhophorIcon.Plus size={size} color={color} weight="bold" />;
      default:
        return null;
    }
  }

  return (
    <Container variant={variant} {...rest}>
      {getIcon(icon)}
      <Text variant={variant}>{label}</Text>
    </Container>
  );
}
