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

export const FieldLabel = styled.h2`
  font-family: ${Type.FontFamily};
  text-align: left;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.15em;
  font-size: 19.89px;
  line-height: 32.82px;
  text-transform: uppercase;
`;
export const SubFieldLabel = styled.h1`
  font-family: ${Type.FontFamily};
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 31.1145px;
  line-height: 165%;
`;
