import {
  Button,
  Container,
  Header,
  MealGroup,
  MealGroupComponent,
  Result,
} from "@components";
import { FlatList, Image, TouchableOpacity } from "react-native";
import {
  HeaderContainer,
  NewMealContainer,
  NewMealTitle,
  ProfileImage,
} from "./styles";

import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

const mealList = ["12.08.22", "11.08.22"];

const meals: MealGroup[] = mealList.map((title) => ({
  title,
  meals: [
    { id: "1", time: "20:00", title: "X-tudo", isInDiet: false },
    {
      id: "2",
      time: "16:00",
      title: "Whey protein com leite",
      isInDiet: true,
    },
    {
      id: "3",
      time: "12:30",
      title: "Salada cesar com frango grelhado",
      isInDiet: true,
    },
    {
      id: "4",
      time: "09:30",
      title: "Vitamina de banana com abacate",
      isInDiet: true,
    },
    {
      id: "5",
      time: "09:30",
      title: "Vitamina de banana com abacate",
      isInDiet: true,
    },
    {
      id: "6",
      time: "09:30",
      title: "Vitamina de banana com abacate",
      isInDiet: true,
    },
    {
      id: "7",
      time: "09:30",
      title: "Vitamina de banana com abacate",
      isInDiet: true,
    },
  ],
}));

export function Home() {
  const navigation = useNavigation();

  function handleCreateNewMeal() {
    navigation.navigate("new-meal");
  }

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

        <Result />

        <NewMealContainer>
          <NewMealTitle>Refeições</NewMealTitle>
          <Button
            label="Nova refeição"
            icon="plus"
            onPress={handleCreateNewMeal}
          />
        </NewMealContainer>

        <FlatList
          data={meals}
          keyExtractor={(item) => item.title}
          renderItem={({ item: { title, meals } }) => (
            <MealGroupComponent title={title} meals={meals} />
          )}
          contentContainerStyle={{ gap: 20 }}
          showsVerticalScrollIndicator={false}
          scrollEnabled
        />
      </Container>
    </>
  );
}
