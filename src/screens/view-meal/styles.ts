import styled from "styled-components/native";

type Variant = "success" | "failure";

export const TextContainer = styled.View(({ theme }) => ({
  gap: theme.SIZES.XXS,
}));

export const Title = styled.Text(({ theme }) => ({
  color: theme.COLORS.BASE.GRAY_100,
  fontFamily: theme.FONT_FAMILIES.BOLD,
  fontSize: theme.SIZES.XL,
}));

export const Description = styled.Text(({ theme }) => ({
  color: theme.COLORS.BASE.GRAY_200,
  fontSize: theme.SIZES.MD,
}));

export const DateAndHourLabel = styled.Text(({ theme }) => ({
  color: theme.COLORS.BASE.GRAY_100,
  fontFamily: theme.FONT_FAMILIES.BOLD,
  fontSize: theme.SIZES.SM,
}));

export const DateAndHourText = styled.Text(({ theme }) => ({
  color: theme.COLORS.BASE.GRAY_200,
  fontSize: theme.SIZES.MD,
}));

export const BagdeContainer = styled.View(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.SIZES.XS,
  padding: theme.SIZES.SM,
  backgroundColor: theme.COLORS.BASE.GRAY_500,
  width: 150,
  borderRadius: 9999,
}));

export const BagdeStatus = styled.View<{ variant: Variant }>(
  ({ theme, variant }) => ({
    height: theme.SIZES.XXS,
    width: theme.SIZES.XXS,
    borderRadius: 9999,
    backgroundColor:
      variant === "success" ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
  })
);

export const BadgeStatusText = styled.Text(({ theme }) => ({}));
