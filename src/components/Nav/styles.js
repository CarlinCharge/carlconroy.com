import * as Colors from "../../styles/Colors";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
`;

export const MainText = styled.a`
  &:hover {
    color: ${Colors.Green};
    transition: 0.3s;
    opacity: 1;
    text-decoration: underline;
  }
  align-items: flex-start;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 26.45px;
  line-height: 165%;
  text-decoration: none;
  padding: 15px;
  color: red;
`;

export const Ul = styled.ul`
  display: flex;
  text-align: center;
  align-items: flex-end;
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
  padding: 5px;
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
