import styled from "styled-components/native";

type Variant = "success" | "failure";

export const Container = styled.TouchableOpacity.attrs<{
  variant: Variant;
  selected: boolean;
}>(() => ({
  activeOpacity: 0.5,
}))(({ theme, variant = "success", selected }) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: theme.SIZES.XXS,

  backgroundColor:
    variant === "success" ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT,
  borderColor:
    variant === "success" ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
  borderWidth: selected ? 1 : 0,
  padding: theme.SIZES.LG,
  borderRadius: theme.SIZES.XXS,
  color: theme.COLORS.BASE.GRAY_100,
  fontSize: theme.SIZES.MD,
}));

export const Badge = styled.View<{ variant: Variant }>(
  ({ theme, variant }) => ({
    height: theme.SIZES.XXS,
    width: theme.SIZES.XXS,
    borderRadius: 9999,
    backgroundColor:
      variant === "success" ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
  })
);

export const Label = styled.Text(({ theme }) => ({
  fontSize: theme.SIZES.SM,
  color: theme.COLORS.BASE.GRAY_100,
}));
