import styled from "styled-components/native";

export const HeaderContainer = styled.View(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ProfileImage = styled.Image(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 9999,
  borderColor: theme.COLORS.BASE.GRAY_200,
  borderWidth: 2,
}));
