import { Button, Container, Header, Modal } from "@components";
import { Meal } from "@models";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deleteMeal, getMealById } from "@storage";
import { AppError } from "@utils";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
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
  date: string;
};

export function ViewMeal() {
  const route = useRoute();
  const navigation = useNavigation();

  const [meal, setMeal] = useState<Meal>({} as Meal);
  const [showModal, setShowModal] = useState(false);

  const { mealId, date } = route.params as RouteParams;
  const variant = meal.inDiet ? "success" : "failure";

  function handleGoBack() {
    navigation.navigate("home");
  }

  function handleGoToEditMeal() {
    navigation.navigate("edit-meal", { mealId: meal.id, date: meal.date });
  }

  async function deleteMealAction() {
    try {
      await deleteMeal(meal);
      handleGoBack();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteMeal(mustDelete: boolean) {
    if (mustDelete) {
      deleteMealAction();
    }

    handleToggleModal();
  }

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  async function fetchMeal() {
    try {
      const fetchedMeal = await getMealById(date, mealId);
      setMeal(fetchedMeal);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Exibir refeição", error.message);
      } else {
        Alert.alert("Exibir refeição", "Não foi possível carregar a refeição.");
      }
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMeal();
  }, []);

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
          <Title>{meal.name}</Title>
          <Description>{meal.description}</Description>
        </TextContainer>
        <TextContainer>
          <DateAndHourLabel>Data e hora</DateAndHourLabel>
          <DateAndHourText>
            {meal.date} às {meal.time}
          </DateAndHourText>
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
            onPress={handleGoToEditMeal}
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
