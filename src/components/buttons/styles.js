import styled from "styled-components";
import * as Colors from "../../styles/Colors";
import * as Type from "../../styles/Type";

export const PrimaryButton = styled.button`
  background: ${Colors.HomepageMainButton};
  font-family: ${Type.FontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 19.89px;
  letter-spacing: 0.15em;
  color: ${Colors.HomepageText};
  border: 0px;
  width: 208.5px;
  height: 39.78px;
  text-transform: uppercase;
  &:disabled {
    background-color: grey;
  }
`;

export const SecondaryButton = styled.button`
  color: ${Colors.HomepageSecondButton};
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
`;
