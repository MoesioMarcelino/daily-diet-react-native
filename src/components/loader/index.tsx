import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

export function Loader() {
  return (
    <Container>
      <ActivityIndicator size={32} />
    </Container>
  );
}
