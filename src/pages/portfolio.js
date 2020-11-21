import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"
import Header from "../components/header"

import Projects from "../components/projects"
import Footer from "../components/footer"

const Portfolio = () => {
  return (
    <>
      <SEO title={`Portfolio`} />
      <Header />
      <main className="container mx-auto pt-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
            <h1 className="text-4xl mb-10">Portfolio</h1>

            <div className="mb-8">
              <p className="text-xl">
                You'll find here are some of the previous projects I worked on
                as an independent developer. I'm currently working on this page.
                Visit my{" "}
                <OutboundLink
                  href="https://github.com/earvinpiamonte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline font-bold"
                >
                  GitHub
                </OutboundLink>{" "}
                profile for open source projects.
              </p>
            </div>

            <div className="mb-8">
              <Projects />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Portfolio
