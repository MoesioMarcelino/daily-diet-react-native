import { Button, Container, Result } from "@components";
import { Image } from "react-native";
import {
  HeaderContainer,
  NewMealContainer,
  NewMealTitle,
  ProfileImage,
} from "./styles";

import logoImg from "@assets/logo.png";

export function Home() {
  return (
    <Container>
      <HeaderContainer>
        <Image source={logoImg} />
        <ProfileImage
          source={{
            uri: "https://github.com/moesiomarcelino.png",
          }}
        />
      </HeaderContainer>

      <Result />

      <NewMealContainer>
        <NewMealTitle>Refeições</NewMealTitle>
        <Button label="Nova refeição" icon="plus" />
      </NewMealContainer>
    </Container>
  );
}
