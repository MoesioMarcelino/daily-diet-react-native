import { Container } from "@components";
import { Image } from "react-native";
import { HeaderContainer, ProfileImage } from "./styles";

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
    </Container>
  );
}
