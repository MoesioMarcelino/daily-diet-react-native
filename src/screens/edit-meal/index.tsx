import {
  BadgeCard,
  Button,
  Container,
  DatePicker,
  Header,
  Input,
} from "@components";
import { Meal } from "@models";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getMealById, updateMeal } from "@storage";
import { AppError, formatDateToDDMMYYYY, formatTimeToHHMM } from "@utils";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { IsInDietLabel } from "./styles";

type RouteParams = {
  mealId: string;
  date: string;
};

export function EditMeal() {
  const route = useRoute();
  const navigation = useNavigation();

  const [meal, setMeal] = useState<Meal>({
    id: "",
    date: formatDateToDDMMYYYY(new Date()),
    description: "",
    time: formatTimeToHHMM(new Date()),
    inDiet: true,
    name: "",
  } as Meal);

  const { mealId, date } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSaveMeal() {
    try {
      await updateMeal(meal);
      navigation.navigate("register-meal-done", {
        variant: meal.inDiet ? "success" : "failure",
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeMealValues(
    key: keyof typeof meal,
    value: string | boolean
  ) {
    setMeal((oldMeal) => ({
      ...oldMeal,
      ...{ [key]: value },
    }));
  }

  async function fetchMeal() {
    try {
      const fetchedMeal = await getMealById(date, mealId);
      setMeal(fetchedMeal);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Editar refeição", error.message, [
          { text: "OK", onPress: handleGoBack },
        ]);
      } else {
        Alert.alert("Editar refeição", "Não foi possível carregar a refeição.");
      }
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <>
      <Header
        title="Editar refeição"
        variant="default"
        onGoBack={handleGoBack}
      />

      <Container style={{ gap: 24 }}>
        <Input
          label="Nome"
          autoCapitalize="words"
          autoCorrect={false}
          enterKeyHint="next"
          value={meal.name}
          onChangeText={(text) => handleChangeMealValues("name", text)}
        />
        <Input
          label="Descrição"
          numberOfLines={5}
          multiline
          style={{ textAlignVertical: "top" }}
          value={meal.description}
          onChangeText={(text) => handleChangeMealValues("description", text)}
        />

        <View style={{ flexDirection: "row", gap: 16 }}>
          <DatePicker
            label="Data"
            mode="date"
            value={meal.date}
            edittable={false}
            valueFormatted={meal.date}
          />
          <DatePicker
            label="Hora"
            mode="time"
            edittable={false}
            value={`${meal.date} ${meal.time}`}
            valueFormatted={meal.time}
          />
        </View>

        <View style={{ gap: 8 }}>
          <IsInDietLabel>Está dentro da dieta?</IsInDietLabel>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <BadgeCard
              label="Sim"
              variant="success"
              selected={meal.inDiet}
              onPress={() => handleChangeMealValues("inDiet", true)}
            />
            <BadgeCard
              label="Não"
              variant="failure"
              selected={!meal.inDiet}
              onPress={() => handleChangeMealValues("inDiet", false)}
            />
          </View>
        </View>

        <Button
          label="Salvar alterações"
          style={{ marginTop: "auto" }}
          onPress={handleSaveMeal}
        />
      </Container>
    </>
  );
}
