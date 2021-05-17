/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "NF-Tags",
    titleTemplate: "%s | NF-Tags",
    description: "Bridging Physical Items to the Blockchain",
    siteUrl: "https://nftags.io",
    author: "NFTags Inc.",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "@nf_tags",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
