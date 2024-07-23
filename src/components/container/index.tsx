import { ViewProps } from "react-native";
import { ContainerStyled } from "./styles";

export function Container(props: ViewProps) {
  return <ContainerStyled {...props} />;
}
