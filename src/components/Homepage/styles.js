import * as Colors from "../../styles/Colors";
import styled from "styled-components";

export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 26.4498px;
  line-height: 165%;
  text-align: center;
  color: ${Colors.HomepageText};
`;

export const SocialWrapper = styled.div`
  display: inline-block;
`;

export const SocialIcons = styled.img`
  padding: 20px;
  flex-direction: row;
  position: center;
`;

export const MainText = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 35.6614px;
  line-height: 165%;
  /* or 59px */

  text-align: center;

  color: ${Colors.HomepageText};
`;

export const Index = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;
