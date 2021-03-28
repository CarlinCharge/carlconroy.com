import React from "react";
import * as S from "../components/Homepage/styles";
import { GlobalStyle } from "../styles/Global";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const ComingSoon = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <S.Index>
        <S.Title>Coming Soon...</S.Title>
        <Footer />
      </S.Index>
    </div>
  );
};

export default ComingSoon;
