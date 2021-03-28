import React from "react";
import * as S from "./styles";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

export const Project = () => {
  return (
    <div>
      <S.MainText> Homework Planner</S.MainText>
      <S.ProjectImage>Image goes here</S.ProjectImage>
      <S.SubTitle>React, GraphQL, Styled Components</S.SubTitle>
      <S.Paragraph>This is a paragraph test</S.Paragraph>
      <PrimaryButton>View The Project</PrimaryButton>
      <SecondaryButton>See All Projects</SecondaryButton>
    </div>
  );
};
