import { theme } from "@styles";
import "styled-components/native";

declare module "styled-components/native" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
