import { Container } from "@components";
import styled from "styled-components/native";

type Variant = "success" | "failure";

export const ContainerStyled = styled(Container)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  gap: theme.SIZES.XL,
}));

export const TextContainer = styled.View(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  gap: 0,
}));

export const Title = styled.Text<{ variant: Variant }>(
  ({ theme, variant }) => ({
    color:
      variant === "success" ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
    fontFamily: theme.FONT_FAMILIES.BOLD,
    fontSize: theme.SIZES.XXL,
    marginBottom: 12,
  })
);

export const Subtitle = styled.Text(({ theme }) => ({
  fontSize: theme.SIZES.LG,
  color: theme.COLORS.BASE.GRAY_100,
  textAlign: "center",
}));

export const SubtitleWithHighlight = styled.Text(({ theme }) => ({
  fontFamily: theme.FONT_FAMILIES.BOLD,
}));
