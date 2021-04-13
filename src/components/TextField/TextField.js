import React from "react";
import * as S from "./styles";

const TextField = () => {
  return (
    <S.Wrapper>
      <label htmlFor="email">Email Address</label>
      <S.Input
        id="email"
        type="email"
        name="email"
        placeholder="your@email.com"
      />
    </S.Wrapper>
  );
};

export default TextField;
