import styled from "styled-components/native";

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: theme.COLORS.BASE.GRAY_300,
}));
