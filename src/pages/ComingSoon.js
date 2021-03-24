import React from "react";
import * as S from "../components/Homepage/styles";
import { GlobalStyle } from "../styles/Global";
import Social from "../components/Social/Social";
import Nav from "../components/Nav/Nav";

const ComingSoon = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <S.Index>
        <S.Title>Coming Soon...</S.Title>
        <Social />
        <S.MainText href="/">Return Home</S.MainText>
      </S.Index>
    </div>
  );
};

export default ComingSoon;
