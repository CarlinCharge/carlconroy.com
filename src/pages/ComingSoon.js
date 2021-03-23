import React from "react";
import * as S from "../components/Homepage/styles";
import { GlobalStyle } from "../styles/Global";

const ComingSoon = () => {
  return (
    <div>
      <GlobalStyle />
      <S.Index>
        <S.Title>Coming Soon...</S.Title>
      </S.Index>
    </div>
  );
};

export default ComingSoon;
