import styled from "styled-components/native";
import { ButtonProps } from ".";

type ContainerProps = Omit<ButtonProps, "label">;

export const Container = styled.TouchableOpacity.attrs<ContainerProps>(() => ({
  activeOpacity: 0.5,
}))(({ theme, variant }) => ({
  padding: theme.SIZES.MD,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.SIZES.XS,
  borderRadius: theme.SIZES.XXS,
  backgroundColor:
    variant === "primary"
      ? theme.COLORS.BASE.GRAY_200
      : theme.COLORS.BASE.GRAY_700,

  border:
    variant === "primary"
      ? theme.COLORS.BASE.GRAY_200
      : theme.COLORS.BASE.GRAY_100,
  borderWidth: 1,
}));

export const Text = styled.Text<{ variant: ButtonProps["variant"] }>(
  ({ theme, variant }) => ({
    color:
      variant === "primary"
        ? theme.COLORS.BASE.WHITE
        : theme.COLORS.BASE.GRAY_100,
    fontFamily: theme.FONT_FAMILIES.BOLD,
  })
);
