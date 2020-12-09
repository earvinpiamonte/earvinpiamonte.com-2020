import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"

import socialPreview from "../images/social-preview.jpg"

import Header from "../components/header"

const Home = () => {
  return (
    <>
      <SEO
        title={`Software Engineer`}
        image={{
          src: socialPreview,
          width: 1280,
          height: 640,
        }}
      />
      <Header className="fixed w-full" />
      <section className="bg-gray-900 h-full">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-12 gap-4 content-center h-full">
            <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
              <h1 className="text-4xl mb-4 text-gray-200 tracking-wider">
                Hello. I'm Noel Earvin.
              </h1>
              <div className="mb-10 text-lg tracking-wider">
                <p className="mb-1 text-gray-200 mb-8">
                  I'm a Software Engineer at{" "}
                  <OutboundLink
                    href="https://www.infor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-blue-700"
                  >
                    Infor PSSC, Inc.
                  </OutboundLink>{" "}
                  in Taguig City, <abbr title="Philippines">PH</abbr>.
                  Previously, an independent Software Developer worked mostly
                  with PHP and JavaScript projects.
                </p>
                <p className="text-gray-200">
                  Outside work, I enjoy{" "}
                  <OutboundLink
                    href="https://github.com/earvinpiamonte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-blue-700"
                  >
                    writing
                  </OutboundLink>{" "}
                  projects for the web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
