import styled from "styled-components/native";
import { Button as ButtonComponent } from "../button";
import { Container as ContainerComponent } from "../container";

export const Container = styled(ContainerComponent)(() => ({
  justifyContent: "center",
  alignItems: "center",
  background: "#00000090",
}));

export const ContentContainer = styled.View(({ theme }) => ({
  backgroundColor: theme.COLORS.BASE.WHITE,
  padding: theme.SIZES.XL,
  gap: theme.SIZES.XL,
  borderRadius: theme.SIZES.XS,
}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.FONT_FAMILIES.BOLD,
  fontSize: theme.SIZES.XL,
  textAlign: "center",
}));

export const ButtonContainer = styled.View(({ theme }) => ({
  flexDirection: "row",
  gap: theme.SIZES.MD,
}));

export const Button = styled(ButtonComponent)(() => ({
  flex: 1,
}));
