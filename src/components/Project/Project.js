import React from "react";
import * as S from "./styles";
import { PrimaryButton, SecondaryButton } from "../buttons/styles";
const Project = ({ title, subtitle, description, image, projectURL }) => {
  return (
    <div>
      <S.MainText>{title}</S.MainText>
      <S.ProjectImage src={image} />
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.Paragraph>{description}</S.Paragraph>
      <PrimaryButton href={projectURL}>View The Project</PrimaryButton>
      <SecondaryButton>See All Projects</SecondaryButton>
    </div>
  );
};

export default Project;
