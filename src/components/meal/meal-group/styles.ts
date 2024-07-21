import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  gap: theme.SIZES.XXS,
}));

export const Title = styled.Text(({ theme }) => ({
  fontSize: theme.SIZES.LG,
  fontFamily: theme.FONT_FAMILIES.BOLD,
  color: theme.COLORS.BASE.GRAY_100,
}));
