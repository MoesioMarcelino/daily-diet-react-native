import { Container, Header, ReportCard } from "@components";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { ContainerStyled, Subtitle, Title } from "./styles";

export function Results() {
  const navigation = useNavigation();
  const { SIZES } = useTheme();

  const mealsPercentage = 90.87;
  const scenario = mealsPercentage >= 85 ? "success" : "failure";

  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <>
      <Header variant={scenario} onGoBack={handleGoBack} />
      <ContainerStyled variant={scenario}>
        <Title>{String(mealsPercentage).replace(".", ",")}%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </ContainerStyled>
      <Container style={{ gap: SIZES.XS }}>
        <ReportCard
          title={22}
          subtitle="melhor sequência de pratos dentro da dieta"
          variant="tertiary"
        />
        <ReportCard
          title={109}
          subtitle="refeições registradas"
          variant="tertiary"
        />

        <View style={{ flexDirection: "row", gap: 8 }}>
          <ReportCard
            title={99}
            subtitle="refeições dentro da dieta"
            variant="primary"
          />
          <ReportCard
            title={10}
            subtitle="refeições fora da dieta"
            variant="secondary"
          />
        </View>
      </Container>
    </>
  );
}
