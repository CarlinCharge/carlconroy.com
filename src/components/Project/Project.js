import React from "react";
import * as S from "./styles";
import { PrimaryButton, SecondaryButton } from "../buttons/styles";
const Project = ({ title, subtitle, description, image, projectURL }) => {
  return (
    <S.Wrapper>
      <S.SecondaryWrapper>
        <S.MainText>{title}</S.MainText>
        <S.SubTitle>{subtitle}</S.SubTitle>
        <S.Paragraph>{description}</S.Paragraph>
        <S.ButtonWrapper>
          <S.StyledPrimaryButton href={projectURL}>
            View The Project
          </S.StyledPrimaryButton>
          <SecondaryButton>See All Projects</SecondaryButton>
        </S.ButtonWrapper>
      </S.SecondaryWrapper>
      <S.ImageWrapper>
        <S.ProjectImage src={image} />
      </S.ImageWrapper>
    </S.Wrapper>
  );
};

export default Project;
