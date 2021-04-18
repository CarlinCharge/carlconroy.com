import React from "react";
import * as S from "./styles";

const TextArea = () => {
  return (
    <S.Wrapper>
      <label htmlFor="message">Message</label>
      <S.TextArea id="message" name="message" placeholder="send me a message" />
    </S.Wrapper>
  );
};

export default TextArea;
