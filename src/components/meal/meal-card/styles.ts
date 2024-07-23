import { Meal } from "@models";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5,
}))(({ theme }) => ({
  flexDirection: "row",
  padding: theme.SIZES.MD,
  borderColor: theme.COLORS.BASE.GRAY_400,
  borderWidth: 1,
  borderRadius: 6,
  gap: theme.SIZES.XS,
  justifyContent: "space-between",
}));

export const ContentContainer = styled.View(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.SIZES.XXS,
}));

export const Time = styled.Text(({ theme }) => ({
  fontSize: theme.SIZES.SM,
  fontFamily: theme.FONT_FAMILIES.BOLD,
}));

export const Divider = styled.View(({ theme }) => ({
  width: 2,
  backgroundColor: theme.COLORS.BASE.GRAY_400,
  height: theme.SIZES.LG,
}));

export const Title = styled.Text(({ theme }) => ({
  fontSize: theme.SIZES.LG,
  maxWidth: 220,
}));

export const Status = styled.View<{ inDiet: Meal["inDiet"] }>(
  ({ theme, inDiet: isInDiet }) => ({
    height: theme.SIZES.SM,
    width: theme.SIZES.SM,
    backgroundColor: isInDiet ? theme.COLORS.GREEN.MID : theme.COLORS.RED.MID,
    borderRadius: 9999,
  })
);
