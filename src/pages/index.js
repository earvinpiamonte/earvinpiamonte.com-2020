import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"

import socialPreview from "../images/social-preview.jpg"

import Header from "../components/header"

const Home = () => {
  return (
    <>
      <SEO
        title={`Software Developer`}
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
              <h1 className="text-3xl mb-4 text-gray-200 tracking-wider uppercase">
                Noel Earvin Piamonte{" "}
                <span className="line-through mx-4">&#47;</span> Software
                Developer
              </h1>
              <div className="mb-10 text-lg tracking-wider">
                <p className="mb-1 text-gray-200 mb-8">
                  Hi, I&apos;m an independent website and React Native app
                  developer at{" "}
                  <OutboundLink
                    href="https://www.freelancer.com/u/earvinpiamonte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-blue-700"
                  >
                    Freelancer.com
                  </OutboundLink>
                  , previously, a senior web developer for Bentacos in San Juan
                  City, <abbr title="Philippines">PH</abbr>.
                </p>
                <p className="text-gray-200">
                  I love writing{" "}
                  <OutboundLink
                    href="https://github.com/earvinpiamonte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-blue-700"
                  >
                    code
                  </OutboundLink>{" "}
                  and Jennie Kim{" "}
                  <span title="공주님" className="text-white">
                    {"<3"}
                  </span>
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
