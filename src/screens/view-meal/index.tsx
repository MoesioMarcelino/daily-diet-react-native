import { Button, Container, Header, Modal } from "@components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import {
  BadgeStatusText,
  BagdeContainer,
  BagdeStatus,
  DateAndHourLabel,
  DateAndHourText,
  Description,
  TextContainer,
  Title,
} from "./styles";

type RouteParams = {
  mealId: string;
};

export function ViewMeal() {
  const route = useRoute();
  const navigation = useNavigation();

  const [variant, setVariant] = useState<"success" | "failure">("success");
  const [showModal, setShowModal] = useState(false);

  const { mealId } = route.params as RouteParams;

  function handleGoBack() {
    navigation.navigate("home");
  }

  function handleEditMeal() {
    navigation.navigate("edit-meal", { mealId });
  }

  function handleDeleteMeal(mustDelete: boolean) {
    if (mustDelete) {
      handleGoBack();
    }

    handleToggleModal();
  }

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Header title="Refeição" variant={variant} onGoBack={handleGoBack} />
      <Modal
        isOpened={showModal}
        onClose={handleToggleModal}
        onCallback={handleDeleteMeal}
      />

      <Container style={{ gap: 24 }}>
        <TextContainer>
          <Title>X-tudo</Title>
          <Description>Xis completo da lancheria do bairro</Description>
        </TextContainer>
        <TextContainer>
          <DateAndHourLabel>Data e hora</DateAndHourLabel>
          <DateAndHourText>12/08/2022 às 20:00</DateAndHourText>
        </TextContainer>
        <BagdeContainer>
          <BagdeStatus variant={variant} />
          <BadgeStatusText>
            {variant === "success" ? "dentro da dieta" : "fora da dieta"}
          </BadgeStatusText>
        </BagdeContainer>
        <View style={{ marginTop: "auto", gap: 8 }}>
          <Button
            label="Editar refeição"
            icon="edit"
            onPress={handleEditMeal}
          />
          <Button
            label="Excluir refeição"
            icon="trash"
            variant="secondary"
            onPress={handleToggleModal}
          />
        </View>
      </Container>
    </>
  );
}
