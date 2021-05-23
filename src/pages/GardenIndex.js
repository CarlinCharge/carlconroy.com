import React from "React";
import { graphql } from "gatsby";
import { PostLink } from "../components/PostsLayout/styles.js";
import Nav from "../components/Nav/Nav";
import { GlobalStyle } from "../styles/Global";

const GardenIndex = (props) => {
  console.log("garden props", props);
  const Posts = props.data.allMdx.edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => (
      <div>
        <PostLink key={edge.node.id} post={edge.node}>
          {edge.node.frontmatter.title}
        </PostLink>
        <div>{edge.node.frontmatter.description}</div>
      </div>
    ));

  return (
    <div>
      <GlobalStyle />
      <Nav />
      {Posts}
    </div>
  );
};

export default GardenIndex;

export const pageQuery = graphql`
  query GardenIndex {
    allMdx(
      filter: { fileAbsolutePath: { glob: "**/posts/**" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;
