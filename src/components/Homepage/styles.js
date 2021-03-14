import * as Colors from "../../styles/Colors";
import styled from "styled-components";

export const Title = styled.h1`
  font-family: Segoe UI;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  color: ${(props) => (props.theme === "admin" ? "red" : Colors.Green)};
`;

export const SubText = styled.a`
  font-family: SeoulHangang CB;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;
  text-align: center;
  text-decoration: none;

  color: ${Colors.SubText};
`;

export const Index = styled.div`
  background: #4b7f52;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;
