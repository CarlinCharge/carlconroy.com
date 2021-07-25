import React from "react";
import * as S from "./styles";
import Img from "gatsby-image";

const GardenSnippet = ({
  title,
  subtitle,
  description,
  featuredImage,
  key,
  path,
}) => {
  let featuredImgFluid = featuredImage.childImageSharp.fluid;
  return (
    <S.GardenSnippetComponent>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Description>{description}</S.Description>
      <Img fluid={featuredImgFluid} />
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
