import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";
import { ResultProps } from ".";

export const Container = styled.View<ResultProps>(({ theme, variant }) => ({
  padding: theme.SIZES.XS,
  paddingBottom: theme.SIZES.XXL,
  backgroundColor:
    variant === "success" ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.SIZES.XS,
}));

export const LinkContainer = styled.View(({ theme }) => ({
  justifyContent: "end",
}));

export const IconTouchable = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5,
}))(() => ({
  marginLeft: "auto",
}));

export const Icon = styled(ArrowUpRight).attrs<{
  variant: ResultProps["variant"];
}>(({ theme, variant }) => ({
  size: theme.SIZES.XL,
  color:
    variant === "success" ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
}))(() => ({}));

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
