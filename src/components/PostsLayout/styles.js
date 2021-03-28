import styled from "styled-components";
import * as Type from "../../styles/Type";
import * as Colors from "../../styles/Colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 70ch font-family ${Type.FontFamily};
`;

export const PostWrapper = styled.div`
  min-height: 100vh;
`;

export const Link = styled.a`
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
