import React from "React";
import { graphql } from "gatsby";
import PostList from "../components/PostList/PostList";
import Nav from "../components/Nav/Nav";
import { GlobalStyle } from "../styles/Global";
import Img from "gatsby-image";

const GardenIndex = ({ data }) => {
  const posts = data.allMdx.edges;
  console.log(posts);
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <PostList data={posts} />
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            path
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;
