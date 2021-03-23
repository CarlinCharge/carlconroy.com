import * as Colors from "../../styles/Colors";
import styled from "styled-components";

export const H1 = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  float: left;
  padding: 20px;
`;

export const Ul = styled.ul`
  display: inline-flex;
  text-align: center;
  flex-wrap: wrap;
  float: right;
  padding: 20px;
`;

export const Li = styled.li`
  justify-content: space-between;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 26.45px;
  line-height: 165%;
  list-style-type: none;
`;

export const ListLink = styled.a`
  &:link {
    color: ${Colors.HomepageText};
    text-decoration: none;
  }
  &:visited {
    color: ${Colors.HomepageText};
  }
  &:hover {
    color: ${Colors.Green};
  }
`;
