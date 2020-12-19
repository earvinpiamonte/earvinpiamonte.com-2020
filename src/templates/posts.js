import React from "react"

import { Link, graphql } from "gatsby"

import formatDate from "../utils/format-date"

import SEO from "../components/seo"
import Header from "../components/header"

import Footer from "../components/footer"

const Posts = ({ data, pageContext }) => {
  const posts = data.posts.edges
  const { currentPage, numPages } = pageContext

  const baseSlug = "blog"

  return (
    <>
      <SEO title={`Blog`} />
      <Header />
      <main className="container mx-auto pt-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
            <h1 className="text-4xl mb-10">Blog</h1>

            <div className="mb-8">
              {posts.map(({ node }) => {
                const { title, date, categories } = node.frontmatter

                const slug = node.fields.slug

                return (
                  <article className="mb-12" key={node.id}>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12">
                        <h2 className="mb-1 text-xl font-bold">
                          <Link to={slug} className="text-blue-700 underline">
                            {title}
                          </Link>
                        </h2>
                        <p className="mb-3 text-gray-600 text-sm">
                          <time dateTime={date}>{formatDate(date)}</time>{" "}
                          &mdash;{" "}
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

export default Posts

export const pageQuery = graphql`
  query postsQuery($skip: Int!, $limit: Int!) {
    posts: allMdx(
      skip: $skip
      limit: $limit
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
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
`
