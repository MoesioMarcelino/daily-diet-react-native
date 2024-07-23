import { Container, Header, Loader, ReportCard } from "@components";
import { MealResult } from "@models";
import { useNavigation } from "@react-navigation/native";
import { getMealDetails } from "@storage";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { useTheme } from "styled-components/native";
import { ContainerStyled, Subtitle, Title } from "./styles";

export function Results() {
  const navigation = useNavigation();
  const { SIZES } = useTheme();

  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState<MealResult>({
    meals: [],
    percentage: 0,
    total: 0,
    totalInDiet: 0,
    totalOutDiet: 0,
    variant: "success",
  } as MealResult);

  function handleGoBack() {
    navigation.navigate("home");
  }

  async function fetchMealDetails() {
    try {
      setLoading(true);
      const mealDetails = await getMealDetails();
      setDetails(mealDetails);
    } catch (error) {
      Alert.alert(
        "Resultados das refeições",
        "Erro ao carregar os resultados das refeições"
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMealDetails();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header variant={details.variant} onGoBack={handleGoBack} />
      <ContainerStyled variant={details.variant}>
        <Title>{String(details.percentage).replace(".", ",")}%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </ContainerStyled>
      <Container style={{ gap: SIZES.XS }}>
        {/* <ReportCard
          title={22}
          subtitle="melhor sequência de pratos dentro da dieta"
          variant="tertiary"
        /> */}
        <ReportCard
          title={details.total}
          subtitle="refeições registradas"
          variant="tertiary"
        />

        <View style={{ flexDirection: "row", gap: 8 }}>
          <ReportCard
            title={details.totalInDiet}
            subtitle="refeições dentro da dieta"
            variant="primary"
          />
          <ReportCard
            title={details.totalOutDiet}
            subtitle="refeições fora da dieta"
            variant="secondary"
          />
        </View>
      </Container>
    </>
  );
}
