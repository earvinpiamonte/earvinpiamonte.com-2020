import React from "react"

import { Link, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"
import Header from "../components/header"

import Footer from "../components/footer"

const Projects = ({ data, pageContext }) => {
  const projects = data.projects.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1

  const baseSlug = "portfolio"

  /* const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? baseSlug
      : `${baseSlug}/` + (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString() */

  return (
    <>
      <SEO title={`Portfolio`} />
      <Header />
      <main className="container mx-auto pt-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
            <h1 className="text-4xl mb-10">Portfolio</h1>

            {isFirst && (
              <div className="mb-8">
                <p className="text-xl mb-3">
                  Here are some of my works as an independent developer. If you
                  need a similar project and you're interested to purchase,
                  email me at{" "}
                  <OutboundLink
                    href="mailto:earvin.piamonte@gmail.com"
                    className="text-blue-700 underline font-bold"
                  >
                    earvin.piamonte@gmail.com
                  </OutboundLink>
                  .
                </p>
              </div>
            )}

            <div className="mb-8">
              {projects.map(({ node }) => {
                const { title, year, categories, thumbnail } = node.frontmatter

                const slug = node.fields.slug

                return (
                  <article className="mb-12" key={node.id}>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="lg:col-span-5 col-span-12">
                        <img
                          src={thumbnail.publicURL}
                          alt={`${title} web page screenshot,`}
                          className="border border-gray-700 rounded-lg"
                          draggable={false}
                        />
                      </div>
                      <div className="lg:col-span-7 col-span-12">
                        <h2 className="mb-1 text-xl font-bold">
                          <Link to={slug} className="text-blue-700 underline">
                            {title}
                          </Link>
                        </h2>
                        <p className="mb-3 text-gray-600 text-sm">
                          <time dateTime={year}>{year}</time> &mdash;{" "}
                          {categories.map((category, key) => (
                            <span key={key}>
                              {`${category}`}
                              {key === categories.length - 1 ? " " : ", "}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}

              {Array.from({ length: numPages }, (_, i) => (
                <Link
                  to={`/${baseSlug}/${i === 0 ? "" : i + 1}`}
                  key={`pagination-number-${i + 1}`}
                  className={`py-2 px-4 border mr-1 rounded border border-gray-900 hover:text-white hover:bg-gray-900 hover:border-gray-900 ${
                    i + 1 === currentPage
                      ? "bg-gray-900 border-gray-900 text-white"
                      : "text-gray-900"
                  }`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Projects

export const pageQuery = graphql`
  query projectsQuery($skip: Int!, $limit: Int!) {
    projects: allMdx(
      skip: $skip
      limit: $limit
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: [frontmatter___year, frontmatter___title], order: DESC }
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
`
