module.exports = {
  baseSlug: `portfolio`,
  itemPath: `./src/templates/project.js`,
  listingPath: `./src/templates/projects.js`,
  listingLimit: 5,
  query: `
      {
        allMdx(
          limit: 1000
          filter: { frontmatter: { type: { eq: "project" } } }
          sort: {
            fields: [frontmatter___year, frontmatter___title]
            order: DESC
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
                url
                year
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
