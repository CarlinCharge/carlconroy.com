import styled from "styled-components";
import * as Colors from "../../styles/Colors";
import * as Type from "../../styles/Type";

export const PrimaryButton = styled.button`
  background: ${Colors.HomepageMainButton};
  font-family: ${Type.FontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.15em;
  color: ${Colors.HomepageText};
  border: 0;
  outline: 0;
  border-radius: 12px;
  min-width: 170px;
  height: 42px;
  text-transform: uppercase;
  &:disabled {
    background-color: grey;
  }
`;

export const SecondaryButton = styled.button`
  color: ${Colors.HomepageSecondButton};
  font-family: ${Type.FontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.15em;
  height: 42px;
  border-radius: 12px;
`;
