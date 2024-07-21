import { ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContainerStyled } from "./styles";

export function Container(props: ViewProps) {
  return (
    <>
      <SafeAreaView />
      <ContainerStyled {...props} />
    </>
  );
}
