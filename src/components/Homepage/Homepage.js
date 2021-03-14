import * as React from "react";
import * as S from "./styles";

const Homepage = () => {
  const theme = "user";
  return (
    <S.Index>
      <S.Title theme={theme}>
        The Future Location of My Digital Greenhouse 🌱
      </S.Title>
      <S.SubText href="https://carlconroydesign.com">
        Carl Conroy Design
      </S.SubText>
    </S.Index>
  );
};

export default Homepage;
