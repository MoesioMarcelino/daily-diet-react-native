import {
  Button,
  Container,
  Header,
  MealGroupComponent,
  Result,
} from "@components";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import {
  HeaderContainer,
  ListMealsEmptyText,
  NewMealContainer,
  NewMealTitle,
  ProfileImage,
} from "./styles";

import logoImg from "@assets/logo.png";
import { MealGroup, MealResult } from "@models";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllMeals, getMealDetails } from "@storage";
import { useCallback, useState } from "react";

export function Home() {
  const navigation = useNavigation();

  const [meals, setMeals] = useState<MealGroup[]>([]);
  const [result, setResult] = useState<MealResult>();

  function handleCreateNewMeal() {
    navigation.navigate("create-meal");
  }

  async function fetchMeals() {
    try {
      const mealsStoraged = await getAllMeals();
      console.log("MEALS STORAGED", mealsStoraged);
      setMeals(mealsStoraged);
      const mealDetails = await getMealDetails();
      setResult(mealDetails);
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      console.log("passando aqui");
      fetchMeals();
    }, [])
  );

  // console.log("meals", JSON.stringify(meals));

  return (
    <>
      <Header variant="hidden" />
      <Container>
        <HeaderContainer>
          <Image source={logoImg} />
          <TouchableOpacity>
            <ProfileImage
              source={{
                uri: "https://github.com/moesiomarcelino.png",
              }}
            />
          </TouchableOpacity>
        </HeaderContainer>

        {meals.length > 0 && result && <Result {...result} />}

        <NewMealContainer>
          {meals.length > 0 && <NewMealTitle>Refeições</NewMealTitle>}
          <Button
            label="Nova refeição"
            icon="plus"
            onPress={handleCreateNewMeal}
          />
        </NewMealContainer>

        <FlatList
          data={meals}
          keyExtractor={(item) => item.date}
          renderItem={({ item: mealGroup }) => (
            <MealGroupComponent {...mealGroup} />
          )}
          contentContainerStyle={{
            gap: 20,
            paddingBottom: 40,
            ...(!meals.length && {
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }),
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View>
              <ListMealsEmptyText>
                Nenhuma refeição foi registrada até o momento.
              </ListMealsEmptyText>
            </View>
          }
        />
      </Container>
    </>
  );
}
