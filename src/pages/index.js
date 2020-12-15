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
              <h1 className="mb-4 tracking-wide">
                <span className="block text-lg text-gray-200">Hello, I'm</span>
                <span className="text-5xl text-white font-semibold">
                  Noel Earvin Piamonte.
                </span>
              </h1>
              <div className="mb-10 text-xl tracking-wide">
                <p className="mb-1 text-gray-200 mb-8">
                  I'm a software engineer at{" "}
                  <OutboundLink
                    href="https://www.infor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-blue-700"
                  >
                    Infor
                  </OutboundLink>{" "}
                  PSSC, Inc. in Taguig City, <abbr title="Philippines">PH</abbr>{" "}
                  <span className="text-gray-600">
                    &mdash; Previously, an independent software developer worked
                    mostly with PHP and JavaScript projects.
                  </span>
                </p>
                <p className="text-gray-200">
                  Outside work, I enjoy writing{" "}
                  <OutboundLink
                    href="https://github.com/earvinpiamonte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-blue-700"
                  >
                    code
                  </OutboundLink>{" "}
                  for the web.
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
