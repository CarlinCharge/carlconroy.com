import React from "react";
import { graphql } from "gatsby";

const Posts = props.data.allMdx.edges
  .filter((edge) => !!edge.node.frontmatter.date)
  .map((edge) => (
    <div>
      <PostLink key={edge.node.id} post={edge.node} to={"/ComingSoon"}>
        {edge.node.frontmatter.title}
      </PostLink>
      <div>{edge.node.frontmatter.description}</div>
    </div>
  ));
