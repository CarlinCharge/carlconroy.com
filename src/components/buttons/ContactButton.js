import React from "react";
import * as S from "./styles";

const ContactButton = ({ submitting }) => {
  return (
    <S.PrimaryButton type="submit" disabled={submitting}>
      Contact
    </S.PrimaryButton>
  );
};

export default ContactButton;
