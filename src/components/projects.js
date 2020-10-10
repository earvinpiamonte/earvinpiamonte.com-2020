import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { OutboundLink } from "gatsby-plugin-google-analytics"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ProjectsQuery = graphql`
  {
    projects: allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
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

const Projects = () => {

  return (
    <StaticQuery
      query={ProjectsQuery}
      render={data => data.projects.edges.map(({ node }) => {
        const {
          title,
          slug,
          url,
          year,
          categories,
          thumbnail
        } = node.frontmatter

        const body = node.body

        return (
          <article className="mb-12" key={node.id}>
            <div className="grid grid-cols-12 gap-4">
              <div className="lg:col-span-5 col-span-12">
                <img
                    src={thumbnail.publicURL}
                    alt={`${title} web page screenshot,`}
                    className="border-2 border-gray-700 rounded-lg"
                    draggable={false}
                  />
              </div>
              <div className="lg:col-span-7 col-span-12">
                <h2
                  className="mb-1 uppercase font-bold"
                  data-slug={slug}
                >
                  {title}
                </h2>
                <p className="mb-3 text-gray-600 text-sm">
                  {year} {" "}
                  &mdash; {" "}
                  {categories.map((category, key) => (
                    <span key={key}>
                      {`${category}`}
                      {key === categories.length - 1 ? " " : ", "}
                    </span>
                  ))}
                </p>

                <div className="mb-3">
                  <MDXRenderer>{body}</MDXRenderer>
                </div>

                <p className="mb-3">
                  <OutboundLink
                    href={url}
                    className="text-blue-500 underline font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View site
                  </OutboundLink>
                </p>

              </div>
            </div>
          </article>
        )
      })}
    />
  )
}

export default Projects
