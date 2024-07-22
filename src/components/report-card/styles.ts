import styled from "styled-components/native";
import { ReportCardProps } from ".";

type ContainerProps = Omit<ReportCardProps, "title" | "subtitle">;

export const Container = styled.View<ContainerProps>(
  ({ theme, variant = "primary" }) => ({
    padding: theme.SIZES.LG,
    borderRadius: theme.SIZES.XXS,
    alignItems: "center",
    background:
      variant === "primary"
        ? theme.COLORS.GREEN.LIGHT
        : variant === "secondary"
        ? theme.COLORS.RED.LIGHT
        : theme.COLORS.BASE.GRAY_500,
  })
);

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.FONT_FAMILIES.BOLD,
  fontSize: theme.SIZES.XL,
  color: theme.COLORS.BASE.GRAY_100,
}));

export const Subtitle = styled.Text(({ theme }) => ({
  fontFamily: theme.FONT_FAMILIES.REGULAR,
  fontSize: theme.SIZES.SM,
  color: theme.COLORS.BASE.GRAY_200,
}));
