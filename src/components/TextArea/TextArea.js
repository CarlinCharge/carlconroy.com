import React from "react";
import * as S from "./styles";

const TextArea = () => {
  return (
    <S.Wrapper>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
    </S.Wrapper>
  );
};

export default TextArea;
