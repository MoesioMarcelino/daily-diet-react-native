import { Container as ContainerComponent } from "@components";
import { Variant } from "@models";
import styled from "styled-components/native";

export const ContainerStyled = styled(ContainerComponent)<{
  variant: Variant;
}>(({ theme, variant }) => ({
  backgroundColor:
    variant === "success" ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT,
  flex: "none",
  paddingTop: 0,
  gap: 4,
  alignItems: "center",
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.FONT_FAMILIES.BOLD,
  fontSize: theme.SIZES.XXL,
  color: theme.COLORS.BASE.GRAY_100,
}));

export const Subtitle = styled.Text(({ theme }) => ({
  fontFamily: theme.FONT_FAMILIES.REGULAR,
  fontSize: theme.SIZES.MD,
  color: theme.COLORS.BASE.GRAY_200,
}));
