import React from "react";
import * as S from "./styles";

const Contact = () => {
  return (
    <S.Form>
      <label htmlFor="contact">
        Contact
        <input id="name" value={name} placeholder="Your Name Here" />
      </label>
      <label htmlFor="description">
        Contact
        <input
          id="description"
          value={""}
          placeholder="Your Name Here"
          type="text"
        />
      </label>
    </S.Form>
  );
};
