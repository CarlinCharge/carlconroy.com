import styled from "styled-components";
import * as Colors from "../../styles/Colors";
import * as Type from "../../styles/Type";

export const Form = styled.form`
  display: flex;
`;
export const Wrapper = styled.div`
  align-items: left;
  flex-direction: column;
  font-family: ${Type.FontFamily};
  padding: 10px;
  max-width: 70ch;
  padding: 20px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
`;
