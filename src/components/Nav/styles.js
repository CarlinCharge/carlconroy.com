import * as Colors from "../../styles/Colors";
import styled from "styled-components";
import { Link } from "gatsby";
export const Nav = styled.nav`
  display: flex;
`;

export const MainText = styled(Link)`
  &:hover {
    color: ${Colors.Green};
    transition: 0.3s;
    opacity: 1;
    text-decoration: underline;
  }
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 26.45px;
  line-height: 165%;
  text-decoration: none;
  padding: 15px;
  color: ${Colors.HomepageText};
`;

export const Ul = styled.ul`
  display: inline-flex;
  padding: 20px;
  overflow: hidden;
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

export const ListLink = styled(Link)`
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

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
