module.exports = {
  baseSlug: `crafts`,
  itemPath: `./src/templates/craft.js`,
  listingPath: `./src/templates/crafts.js`,
  listingLimit: 5,
  query: `
      {
        allMdx(
          limit: 1000
          filter: { frontmatter: { type: { eq: "craft" } } }
          sort: {
            fields: [frontmatter___title]
            order: ASC
          }
        ) {
          edges {
            node {
              id
              excerpt
              body
              fields {
                slug
              }
              frontmatter {
                type
                title
                githubURL
                demoURL
                downloadURL
                viewURL
                categories
                featuredImage {
                  publicURL
                }
                thumbnail {
                  publicURL
                }
              }
            }
          }
        }
      }
    `,
}
