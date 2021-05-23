import React from "react";
import { arrayOf, shape, string } from "prop-types";
import { PostLink } from "../PostsLayout/styles.js";
import * as S from "./styles";

const PostList = ({ data }) => {
  return (
    <S.PostListComponent>
      <S.MaxWidth>
        {data.map((edge) => (
          <S.Post>
            <PostLink
              key={edge.node.id}
              post={edge.node}
              to={edge.node.frontmatter.path}
            >
              {edge.node.frontmatter.title}
            </PostLink>
            <div>{edge.node.frontmatter.description}</div>
          </S.Post>
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
