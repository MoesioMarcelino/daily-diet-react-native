import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  gap: theme.SIZES.XXS,
}));

export const Label = styled.Text(({ theme }) => ({
  fontFamily: theme.FONT_FAMILIES.BOLD,
  color: theme.COLORS.BASE.GRAY_200,
  fontSize: theme.SIZES.SM,
}));

export const InputStyled = styled.TextInput(({ theme }) => ({
  borderColor: theme.COLORS.BASE.GRAY_400,
  borderWidth: 1,
  padding: theme.SIZES.SM,
  borderRadius: theme.SIZES.XXS,
  color: theme.COLORS.BASE.GRAY_100,
  fontSize: theme.SIZES.MD,
}));
