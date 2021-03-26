module.exports = {
  siteMetadata: {
    title: "CarlConroy",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`],
        display: "swap",
      },
    },
    "gatsby-plugin-mdx",
    { resolve: `gatsby-plugin-styled-components` },
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
