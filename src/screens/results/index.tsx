import { ReportCard } from "@components";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import {
  ContainerStyled,
  GoBackIcon,
  GoBackTouchableArea,
  ReportContainer,
  Subtitle,
  Title,
} from "./styles";

export function Results(props: any) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  }

  const mealsPercentage = 90.87;
  const scenario = mealsPercentage >= 85 ? "success" : "failure";

  return (
    <>
      <ContainerStyled variant={scenario}>
        <GoBackTouchableArea onPress={handleGoHome}>
          <GoBackIcon variant={scenario} />
        </GoBackTouchableArea>

        <Title>{String(mealsPercentage).replace(".", ",")}%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </ContainerStyled>
      <ReportContainer>
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
      </ReportContainer>
    </>
  );
}
