/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Noel Earvin Piamonte`,
    siteUrl: `https://earvinpiamonte.com`,
    description: `Noel Earvin Piamonte is a software engineer from Mandaluyong City, Philippines.`,
    author: `Noel Earvin Piamonte`,
    keywords: [
      `software engineer`,
      `software developer`,
      `freelancer`,
      `react native`,
      `freelancer philippines`,
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `earvinpiamonte`,
        short_name: `earvinpiamonte`,
        start_url: `/`,
        background_color: `#111`,
        theme_color: `#111`,
        display: `minimal-ui`,
        icon: `src/images/profile.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-50697157-1",
      },
    },
  ],
}
