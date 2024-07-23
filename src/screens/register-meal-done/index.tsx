import { Image } from "react-native";
import {
  ContainerStyled,
  Subtitle,
  SubtitleWithHighlight,
  TextContainer,
  Title,
} from "./styles";

import registerMealDoneFailure from "@assets/register-meal-done-failure.png";
import registerMealDoneSuccess from "@assets/register-meal-done-success.png";
import { Button, Header } from "@components";
import { useNavigation, useRoute } from "@react-navigation/native";

type Variant = "success" | "failure";

type RouteParams = {
  variant: Variant;
};

export function RegisterMealDone() {
  const route = useRoute();
  const navigation = useNavigation();

  const { variant } = route.params as RouteParams;

  const title = variant === "success" ? "Continue assim!" : "Que pena!";

  const subtitle =
    variant === "success" ? (
      <Subtitle>
        Você continua{" "}
        <SubtitleWithHighlight>dentro da dieta</SubtitleWithHighlight>. Muito
        bem!
      </Subtitle>
    ) : (
      <Subtitle>
        Você <SubtitleWithHighlight>saiu da dieta</SubtitleWithHighlight> dessa
        vez, mas continue se esforçando e não desista
      </Subtitle>
    );

  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <>
      <Header variant="hidden" />
      <ContainerStyled>
        <TextContainer>
          <Title variant={variant}>{title}</Title>
          {subtitle}
        </TextContainer>
        <Image
          source={
            variant === "success"
              ? registerMealDoneSuccess
              : registerMealDoneFailure
          }
        />
        <Button label="Ir para a página inicial" onPress={handleGoHome} />
      </ContainerStyled>
    </>
  );
}
