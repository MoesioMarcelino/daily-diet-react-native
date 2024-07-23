import {
  BadgeCard,
  Button,
  Container,
  DatePicker,
  Header,
  Input,
} from "@components";
import { useNavigation } from "@react-navigation/native";
import { formatDateToDDMMYYYY, formatTimeToHHMM } from "@utils";
import { useState } from "react";
import { View } from "react-native";
import { IsInDietLabel } from "./styles";

export function CreateMeal() {
  const navigation = useNavigation();

  const [formulary, setFormulary] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    inDiet: true,
  });

  function handleGoBack() {
    navigation.navigate("home");
  }

  function handleSaveMeal() {
    navigation.navigate("register-meal-done", {
      variant: formulary.inDiet ? "success" : "failure",
    });
  }

  function changeFormularyValue(
    key: keyof typeof formulary,
    value: string | boolean
  ) {
    setFormulary((oldFormulary) => ({ ...oldFormulary, ...{ [key]: value } }));
  }

  function handleChangeDatePicker(field: "date" | "time", date = new Date()) {
    if (field === "date") {
      const valueFormatted = formatDateToDDMMYYYY(date);
      changeFormularyValue(field, valueFormatted);
    } else {
      const valueFormatted = formatTimeToHHMM(date);
      changeFormularyValue(field, valueFormatted);
    }
  }

  console.log("formulary", formulary);

  return (
    <>
      <Header title="Nova refeição" variant="default" onGoBack={handleGoBack} />
      <Container style={{ gap: 24 }}>
        <Input
          label="Nome"
          autoCapitalize="sentences"
          autoCorrect={false}
          enterKeyHint="next"
          value={formulary.name}
          onChangeText={(text) => changeFormularyValue("name", text)}
        />
        <Input
          label="Descrição"
          numberOfLines={5}
          multiline
          style={{ textAlignVertical: "top" }}
          value={formulary.description}
          onChangeText={(text) => changeFormularyValue("description", text)}
        />

        <View style={{ flexDirection: "row", gap: 16 }}>
          <DatePicker
            label="Data"
            mode="date"
            valueFormatted={formulary.date}
            onChange={(date) => handleChangeDatePicker("date", date)}
          />
          <DatePicker
            label="Hora"
            mode="time"
            valueFormatted={formulary.time}
            onChange={(date) => handleChangeDatePicker("time", date)}
          />
        </View>

        <View style={{ gap: 8 }}>
          <IsInDietLabel>Está dentro da dieta?</IsInDietLabel>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <BadgeCard
              label="Sim"
              variant="success"
              selected={formulary.inDiet}
              onPress={() => changeFormularyValue("inDiet", true)}
            />
            <BadgeCard
              label="Não"
              variant="failure"
              selected={!formulary.inDiet}
              onPress={() => changeFormularyValue("inDiet", false)}
            />
          </View>
        </View>

        <Button
          label="Cadastrar refeição"
          style={{ marginTop: "auto" }}
          onPress={handleSaveMeal}
        />
      </Container>
    </>
  );
}
