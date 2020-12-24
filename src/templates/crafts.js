import React from "react"

import { Link, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"
import Header from "../components/header"

import Footer from "../components/footer"

const Crafts = ({ data, pageContext }) => {
  const crafts = data.crafts.edges
  const { currentPage, numPages } = pageContext

  const baseSlug = "crafts"

  return (
    <>
      <SEO title={`Crafts`} />
      <Header />
      <main className="container mx-auto pt-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
            <h1 className="text-4xl mb-10">Crafts</h1>

            <div className="mb-8">
              {crafts.map(({ node }) => {
                const {
                  title,
                  githubURL,
                  demoURL,
                  downloadURL,
                  categories,
                  thumbnail,
                } = node.frontmatter

                const slug = node.fields.slug

                return (
                  <article className="mb-12" key={node.id}>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="lg:col-span-5 col-span-12">
                        {thumbnail ? (
                          <img
                            src={thumbnail.publicURL}
                            alt={`${title} web page screenshot,`}
                            className="border-2 border-black rounded-lg"
                            draggable={false}
                          />
                        ) : (
                          <div className="border-2 border-black rounded-lg h-48 bg-gray-300"></div>
                        )}
                      </div>
                      <div className="lg:col-span-7 col-span-12">
                        <h2 className="mb-1 text-xl font-bold">
                          <Link to={slug} className="text-blue-700 underline">
                            {title}
                          </Link>
                        </h2>
                        <p className="mb-3 text-gray-600 text-sm">
                          {categories.map((category, key) => (
                            <span key={key}>
                              {`${category}`}
                              {key === categories.length - 1 ? " " : ", "}
                            </span>
                          ))}
                        </p>
                        <div className="mb-3">
                          {githubURL && (
                            <OutboundLink
                              href={`${githubURL}`}
                              className="inline-block mr-2 px-4 py-1 rounded-full border border-gray-700 text-gray-700 hover:text-white hover:bg-black hover:border-black"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub
                            </OutboundLink>
                          )}
                          {demoURL && (
                            <OutboundLink
                              href={`${demoURL}`}
                              className="inline-block mr-2 px-4 py-1 rounded-full border border-gray-700 text-gray-700 hover:text-white hover:bg-black hover:border-black"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Demo
                            </OutboundLink>
                          )}
                          {downloadURL && (
                            <OutboundLink
                              href={`${downloadURL}`}
                              className="inline-block mr-2 px-4 py-1 rounded-full border border-gray-700 text-gray-700 hover:text-white hover:bg-black hover:border-black"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Download
                            </OutboundLink>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}

              {Array.from({ length: numPages }, (_, i) => (
                <Link
                  to={`/${baseSlug}/${i === 0 ? "" : i + 1}`}
                  key={`pagination-number-${i + 1}`}
                  className={`py-2 px-4 border mr-1 rounded border border-gray-900 hover:text-white hover:bg-black hover:border-gray-900 ${
                    i + 1 === currentPage
                      ? "bg-black border-gray-900 text-white"
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

export default Crafts

export const pageQuery = graphql`
  query craftsQuery($skip: Int!, $limit: Int!) {
    crafts: allMdx(
      skip: $skip
      limit: $limit
      filter: { frontmatter: { type: { eq: "craft" } } }
      sort: { fields: [frontmatter___title], order: ASC }
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
