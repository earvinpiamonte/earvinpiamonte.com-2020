import React from "react"

import { graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/seo"
import Header from "../components/header"

import Footer from "../components/footer"

const Craft = ({ data }) => {
  const { craft } = data

  const {
    title,
    githubURL,
    demoURL,
    viewURL,
    downloadURL,
    categories,
    featuredImage,
  } = craft.frontmatter

  const body = craft.body
  const excerpt = craft.excerpt

  return (
    <>
      <SEO
        title={`${title}`}
        description={`${excerpt}`}
        image={{
          src: featuredImage,
          width: 1280,
          height: 640,
        }}
      />
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
            <div className="mb-8">
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
              {viewURL && (
                <OutboundLink
                  href={`${viewURL}`}
                  className="inline-block mr-2 px-4 py-1 rounded-full border border-gray-700 text-gray-700 hover:text-white hover:bg-black hover:border-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
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
      </main>
      <Footer />
    </>
  )
}

export default Craft

export const pageQuery = graphql`
  query craftQueryBySlug($slug: String!) {
    craft: mdx(
      frontmatter: { type: { eq: "craft" } }
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
        githubURL
        demoURL
        downloadURL
        viewURL
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
