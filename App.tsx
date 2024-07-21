import { Routes } from "@routes";
import { theme } from "@styles";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Routes />
    </ThemeProvider>
  );
}
