module.exports = {
  siteMetadata: {
    title: "CarlConroy",
  },
  plugins: [
    "gatsby-plugin-mdx",
    { resolve: `gatsby-plugin-styled-components` },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },

      __key: "pages",
    },
  ],
};
