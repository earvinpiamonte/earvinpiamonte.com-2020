import React from "react"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"
import Header from "../components/header"

import Footer from "../components/footer"

const Project = ({ data }) => {
  const { project } = data

  const { title, url, year, categories, featuredImage } = project.frontmatter

  const body = project.body
  const excerpt = project.excerpt

  return (
    <>
      <SEO title={`${title}`} description={`${excerpt}`} />
      <Header />
      <main className="container mx-auto pt-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
            <h1 className="text-4xl mb-10">{title}</h1>

            <div className="mb-8">
              <img
                src={featuredImage.publicURL}
                alt={`${title} web page screenshot,`}
                className="border border-gray-700 rounded-lg"
                draggable={false}
              />
            </div>
            <p className="mb-3 text-gray-600 text-sm">
              <time dateTime={year}>{year}</time> &mdash;{" "}
              {categories.map((category, key) => (
                <span key={key}>
                  {`${category}`}
                  {key === categories.length - 1 ? " " : ", "}
                </span>
              ))}
            </p>
            <div className="mb-8">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
            {url && (
              <div className="mb-8">
                <OutboundLink
                  href={`${url}`}
                  className="inline-block px-4 py-1 rounded-full border border-gray-700 text-gray-700 hover:text-white hover:bg-blue-700 hover:border-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                  <span className="ml-1 align-middle">View</span>
                </OutboundLink>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Project

export const pageQuery = graphql`
  query projectQueryBySlug($slug: String!) {
    project: mdx(
      frontmatter: { slug: { eq: $slug }, type: { eq: "project" } }
    ) {
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
`
