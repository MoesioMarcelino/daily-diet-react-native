import {
  BadgeCard,
  Button,
  Container,
  DatePicker,
  Header,
  Input,
} from "@components";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { IsInDietLabel } from "./styles";

export function EditMeal() {
  const navigation = useNavigation();

  const [isInDiet, setIsInDiet] = useState(true);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSaveMeal() {
    navigation.navigate("register-meal-done", {
      variant: isInDiet ? "success" : "failure",
    });
  }

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
        />
        <Input
          label="Descrição"
          numberOfLines={5}
          multiline
          style={{ textAlignVertical: "top" }}
        />

        <View style={{ flexDirection: "row", gap: 16 }}>
          <DatePicker
            label="Data"
            mode="date"
            value={new Date()}
            valueFormatted="12/08/2022"
          />
          <DatePicker
            label="Hora"
            mode="time"
            value={new Date()}
            valueFormatted="16:00"
          />
        </View>

        <View style={{ gap: 8 }}>
          <IsInDietLabel>Está dentro da dieta?</IsInDietLabel>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <BadgeCard
              label="Sim"
              variant="success"
              selected={isInDiet}
              onPress={() => setIsInDiet(true)}
            />
            <BadgeCard
              label="Não"
              variant="failure"
              selected={!isInDiet}
              onPress={() => setIsInDiet(false)}
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
