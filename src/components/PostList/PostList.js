import React from "react";
import { arrayOf, shape, string } from "prop-types";
import * as S from "./styles";
import GardenSnippet from "../GardenSnippet/GardenSnippet";

const PostList = ({ data }) => {
  return (
    <S.PostListComponent>
      <S.MaxWidth>
        {data.map((edge) => (
          <GardenSnippet {...edge.node.frontmatter} />
        ))}
      </S.MaxWidth>
    </S.PostListComponent>
  );
};

PostList.propTypes = {
  data: arrayOf(
    shape({
      node: shape({
        id: string,
        frontmatter: shape({
          title: string,

          /** The URL to this post to use in anchor tags. */
          path: string,
          description: string,
        }),
      }),
    })
  ),
};

export default PostList;
