import { ModalProps as ModalPropsRN, Modal as ModalRN } from "react-native";
import {
  Button,
  ButtonContainer,
  Container,
  ContentContainer,
  Title,
} from "./styles";

type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  onCallback: (confirmation: boolean) => void;
} & ModalPropsRN;

export function Modal({ isOpened = false, onClose, onCallback }: ModalProps) {
  if (!isOpened) {
    return null;
  }

  return (
    <ModalRN
      animationType="fade"
      transparent
      visible={isOpened}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <Container>
        <ContentContainer>
          <Title>Deseja realmente excluir o registro da refeição?</Title>
          <ButtonContainer>
            <Button
              label="Cancelar"
              variant="secondary"
              onPress={() => onCallback(false)}
            />
            <Button label="Sim, excluir" onPress={() => onCallback(true)} />
          </ButtonContainer>
        </ContentContainer>
      </Container>
    </ModalRN>
  );
}
