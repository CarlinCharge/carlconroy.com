import styled from "styled-components";
import * as C from "../../styles/Colors";
import * as Type from "../../styles/Type";

export const GardenSnippetComponent = styled.a`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-family: ${Type.FontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 26.4498px;
  line-height: 165%;
  text-align: left;
  color: ${C.HomepageText};
`;

export const Subtitle = styled.div`
  font-family: ${Type.FontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 22.22px;
  line-height: 36.66px;
  color: ${C.HomepageText};
`;

export const Description = styled.p`
  font-family: ${Type.FontFamily};
  font-size: 20px;
  line-height: 33px;
  color: ${C.HomepageText};
`;

export const Image = styled.img`
  width: 52px;
  height: 52px;
`;
