import { Container as ContainerComponent } from "@components";
import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native";

type Variant = "success" | "failure";

export const ContainerStyled = styled(ContainerComponent)<{ variant: Variant }>(
  ({ theme, variant }) => ({
    backgroundColor:
      variant === "success" ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT,
    flex: "none",
    paddingTop: theme.SIZES.XL * 2,
    paddingBottom: theme.SIZES.XXL,
    gap: 4,
    alignItems: "center",
  })
);

export const GoBackTouchableArea = styled.TouchableOpacity(() => ({
  marginRight: "auto",
}));

export const GoBackIcon = styled(ArrowLeft).attrs<{ variant: Variant }>(
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === "success" ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
  })
)(() => ({}));

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

export const ReportContainer = styled(ContainerComponent)(({ theme }) => ({
  gap: theme.SIZES.XS,
}));
