const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const portfolioBaseSlug = "/portfolio"

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const projectItem = path.resolve(`./src/templates/project.js`)
  return graphql(
    `
      {
        projects: allMdx(
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
              frontmatter {
                slug
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
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create project item pages
    const projects = result.data.projects.edges

    projects.forEach((project, index) => {
      const previous =
        index === projects.length - 1 ? null : projects[index + 1].node
      const next = index === 0 ? null : projects[index - 1].node

      createPage({
        path: project.node.frontmatter.slug,
        component: projectItem,
        context: {
          slug: project.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })

    // Create portfolio page/ projects list page
    const itemsPerPage = 5
    const numPages = Math.ceil(projects.length / itemsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0 ? `${portfolioBaseSlug}` : `${portfolioBaseSlug}/${i + 1}`,
        component: path.resolve("./src/templates/projects.js"),
        context: {
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
