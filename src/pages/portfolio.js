import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"
import Header from "../components/header"

import Projects from '../components/projects'


const Portfolio = () => {

  return (
    <>
      <SEO title={`Portfolio`} />
      <Header />
      <main className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
            <h1 className="text-4xl mb-10">Portfolio</h1>

            <div className="mb-8">
              <p>
                You'll find here are some of the previous projects I worked on as an independent developer. Visit my {" "}
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

            <Projects />

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
