import React from "React";
import { graphql } from "gatsby";
import { PostLink } from "../components/PostsLayout/styles.js";

const GardenIndex = (props) => {
  console.log("garden props", props);
  const Posts = props.data.allMdx.edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => (
      <PostLink key={edge.node.id} post={edge.node}>
        {edge.node.frontmatter.title}
      </PostLink>
    ));

  return <div>{Posts}</div>;
};

export default GardenIndex;

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
