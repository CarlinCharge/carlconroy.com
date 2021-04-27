import styled from "styled-components";
import * as Colors from "../../styles/Colors";
import { PrimaryButton } from "../buttons/styles";

export const Wrapper = styled.div`
  display: flex;
  width: 70ch;
  margin-bottom: 50px;
`;

export const SecondaryWrapper = styled.div``;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledPrimaryButton = styled(PrimaryButton)`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const MainText = styled.h1`
  color: ${Colors.HomepageText};
`;

export const SubTitle = styled.h3``;

export const Paragraph = styled.p`
  color: ${Colors.HomepageText};
`;

export const ProjectImage = styled.img`
  width: 426px;
  height: 334px;
`;
