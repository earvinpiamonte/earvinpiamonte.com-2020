import React from "react"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Prism from "prismjs"
import "prism-themes/themes/prism-coldark-dark.css"
import "prismjs/components/prism-json"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-swift"

import formatDate from "../utils/format-date"

import SEO from "../components/seo"
import Header from "../components/header"

import Footer from "../components/footer"

const Post = ({ data }) => {
  const { post } = data

  const { title, date, categories, featuredImage } = post.frontmatter

  const body = post.body
  const excerpt = post.excerpt

  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <SEO title={`${title}`} description={`${excerpt}`} />
      <Header />
      <main className="container mx-auto pt-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
            <h1 className="text-4xl mb-10">{title}</h1>

            <div className="mb-8">
              {featuredImage && (
                <img
                  src={featuredImage.publicURL}
                  alt={`${title} web page screenshot,`}
                  className="border border-gray-700 rounded-lg"
                  draggable={false}
                />
              )}
            </div>
            <p className="mb-3 text-gray-600 text-sm">
              <time dateTime={date}>{formatDate(date)}</time> &mdash;{" "}
              {categories.map((category, key) => (
                <span key={key}>
                  {`${category}`}
                  {key === categories.length - 1 ? " " : ", "}
                </span>
              ))}
            </p>
            <div className="app-mdx mb-8">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query postQueryBySlug($slug: String!) {
    post: mdx(
      frontmatter: { type: { eq: "post" } }
      fields: { slug: { eq: $slug } }
    ) {
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
`
