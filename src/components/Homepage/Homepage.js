import * as React from "react";
import * as S from "./styles";
import Social from "../Social/Social";

const Homepage = () => {
  const theme = "user";
  return (
    <S.Index>
      <S.Title theme={theme}>
        The Future Location of My Digital Greenhouse 🌱
      </S.Title>

      <S.MainText href="https://carlconroydesign.com">
        Carl Conroy Design
      </S.MainText>
      <S.SocialWrapper>
        <Social />
      </S.SocialWrapper>
    </S.Index>
  );
};

export default Homepage;
