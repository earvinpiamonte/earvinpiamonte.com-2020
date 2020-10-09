import React from "react"
import { graphql } from "gatsby"

import { OutboundLink } from "gatsby-plugin-google-analytics"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "../components/seo"
import Header from "../components/header"

import "../styles/app.css"

export const pageQuery = graphql`
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

const Portfolio = ({ data }) => {
  const { edges: projects } = data.projects

  const Projects = () => {
    return projects.map(({ node }) => {
      const {
        title,
        slug,
        url,
        year,
        categories,
        featuredImage,
        thumbnail
      } = node.frontmatter

      const body = node.body

      return (
        <article className="mb-8" key={node.id}>
          <div className="grid grid-cols-12 gap-4">
            <div className="lg:col-span-5 col-span-12">
              <img
                  src={thumbnail.publicURL}
                  alt="Project thumbnail,"
                  className="border border-gray-600 rounded-lg"
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
    })
  }

  return (
    <>
      <SEO title={`Portfolio`} />
      <Header />
      <main className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
            <h1 className="text-4xl text-gray-900 mb-10">Portfolio</h1>

            <div className="mb-8">
              <p>
                You'll find here are some of the previous projects I worked on as an independent developer. You may also check my {" "}
                <OutboundLink
                  href="https://github.com/earvinpiamonte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline font-bold"
                >
                  GitHub
                </OutboundLink>{" "}
                profile for my open source projects.
              </p>
            </div>

            <Projects className="mb-16" />

            <p className="text-sm mt-16 text-gray-500">
              <abbr title="야!">Ya!</abbr> this page is still in the works.
              Check out my{" "}
              <OutboundLink
                href="https://github.com/earvinpiamonte"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 font-bold"
              >
                GitHub
              </OutboundLink>{" "}
              and{" "}
              <OutboundLink
                href="https://freelancer.com/u/earvinpiamonte"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 font-bold"
              >
                Freelancer.com
              </OutboundLink>{" "}
              profile.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Portfolio
