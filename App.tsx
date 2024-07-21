import { Loader } from "@components";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { Routes } from "@routes";
import { theme } from "@styles";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {fontLoaded ? <Routes /> : <Loader />}
    </ThemeProvider>
  );
}
