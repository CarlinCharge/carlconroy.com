import styled from "styled-components";
import * as Type from "../../styles/Type";
import * as Colors from "../../styles/Colors";
import { Link } from "gatsby";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 60ch font-family ${Type.FontFamily};
  text-align: center;
`;

export const PostWrapper = styled.div`
  min-height: 100vh;
`;

export const PostLink = styled(Link)`
  &:link {
    color: ${Colors.HomepageText};
  }
  &:visited {
    color: ${Colors.HomepageText};
  }
  &:hover {
    color: ${Colors.Green};
    transition: 500ms ease;
  }
`;

export const Image = styled.img``;
