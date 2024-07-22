import { ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContainerStyled } from "./styles";

type ContainerProps = {
  safeArea?: boolean;
} & ViewProps;

export function Container({ safeArea = false, ...rest }: ContainerProps) {
  return (
    <>
      {safeArea && <SafeAreaView />}
      <ContainerStyled {...rest} />
    </>
  );
}
