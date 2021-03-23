import * as Colors from "../../styles/Colors";
import styled from "styled-components";

export const SocialLink = styled.a`
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
