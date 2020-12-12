const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const templates = [
  require("./src/templates-data/portfolio"),
  require("./src/templates-data/blog"),
]

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  for (
    let templateIndex = 0;
    templateIndex < templates.length;
    templateIndex++
  ) {
    const template = templates[templateIndex]

    const pageItem = path.resolve(template.itemPath)

    const dataQuery = await graphql(template.query)

    if (dataQuery.errors) {
      throw dataQuery.errors
    }

    // Create page item pages
    const pageListing = dataQuery.data.allMdx.edges

    pageListing.forEach((page, index) => {
      const previous =
        index === pageListing.length - 1 ? null : pageListing[index + 1].node
      const next = index === 0 ? null : pageListing[index - 1].node

      createPage({
        path: page.node.fields.slug,
        component: pageItem,
        context: {
          slug: page.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Create page listing
    const itemsPerPage = template.listingLimit
    const numPages = Math.ceil(pageListing.length / itemsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0 ? `/${template.baseSlug}` : `/${template.baseSlug}/${i + 1}`,
        component: path.resolve(template.listingPath),
        context: {
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  }
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
