module.exports = {
  baseSlug: `blog`,
  itemPath: `./src/templates/post.js`,
  listingPath: `./src/templates/posts.js`,
  listingLimit: 5,
  query: `
      {
        allMdx(
          limit: 1000
          filter: { frontmatter: { type: { eq: "post" } } }
          sort: {
            fields: [frontmatter___date, frontmatter___title]
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
                date
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
