import { TextInputProps } from "react-native";
import { Container, InputStyled, Label } from "./styles";

type InputProps = TextInputProps & {
  label?: string;
};

export function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputStyled {...rest} />
    </Container>
  );
}
