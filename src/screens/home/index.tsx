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
import { MealGroup } from "@models";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllMeals } from "@storage";
import { useCallback, useState } from "react";

export function Home() {
  const navigation = useNavigation();

  const [meals, setMeals] = useState<MealGroup[]>([]);

  function handleCreateNewMeal() {
    navigation.navigate("new-meal");
  }

  async function fetchMeals() {
    try {
      const mealsStoraged = await getAllMeals();
      setMeals(mealsStoraged);
    } catch (error) {
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

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

        {meals.length > 0 && <Result />}

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
          renderItem={({ item: { date: title, meals } }) => (
            <MealGroupComponent date={title} meals={meals} />
          )}
          contentContainerStyle={{
            gap: 20,
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
