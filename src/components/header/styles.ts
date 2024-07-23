import { ArrowLeft } from "phosphor-react-native";
import { ViewProps } from "react-native";
import styled from "styled-components/native";
import { Variant } from ".";

type ContainerProps = ViewProps & { variant: Variant };

export const EmptyContainer = styled.View(() => ({
  paddingTop: 40,
}));

export const Container = styled.View<ContainerProps>(({ theme, variant }) => ({
  flexDirection: "row",
  alignItems: "center",
  padding: theme.SIZES.XL,
  paddingTop: 60,
  backgroundColor:
    variant === "success"
      ? theme.COLORS.GREEN.LIGHT
      : variant === "failure"
      ? theme.COLORS.RED.LIGHT
      : theme.COLORS.BASE.GRAY_500,
}));

export const GoBackTouchableArea = styled.TouchableOpacity(() => ({
  marginRight: "auto",
}));

export const GoBackIcon = styled(ArrowLeft).attrs<{ variant: Variant }>(
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === "success"
        ? theme.COLORS.GREEN.DARK
        : variant === "failure"
        ? theme.COLORS.RED.DARK
        : theme.COLORS.BASE.GRAY_200,
  })
)(() => ({}));

export const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.FONT_FAMILIES.BOLD,
  color: theme.COLORS.BASE.GRAY_100,
  fontSize: theme.SIZES.LG,
  marginRight: "auto",
}));
