import React from "react";
import * as S from "./styles";

const GardenSnippet = ({ title, subtitle, description, img, key, path }) => {
  return (
    <S.GardenSnippetComponent>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Description>{description}</S.Description>
      <S.Image>{img}</S.Image>
    </S.GardenSnippetComponent>
  );
};

export default GardenSnippet;

// <S.Post>
//   <PostLink key={edge.node.id} post={edge.node} to={edge.node.frontmatter.path}>
//     {edge.node.frontmatter.title}
//   </PostLink>
//   <div>{edge.node.frontmatter.description}</div>
// </S.Post>;
