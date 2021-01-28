import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"

import socialPreview from "../images/social-preview.jpg"

import Header from "../components/header"
import Footer from "../components/footer"

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
      <section className="bg-black h-full">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-12 gap-4 content-center h-full">
            <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
              <h1 className="mb-6 tracking-wider">
                <span className="block text-lg text-gray-200">Hello, I'm</span>{" "}
                <span className="text-5xl text-white font-semibold">
                  Noel Earvin Piamonte.
                </span>
              </h1>
              <div className="mb-10 text-xl tracking-wider">
                <p className="mb-1 text-gray-200 mb-8">
                  I'm a developer and crafter based in the Philippines. I work
                  at{" "}
                  <OutboundLink
                    href="https://www.infor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-blue-700"
                  >
                    Infor
                  </OutboundLink>{" "}
                  as a Software Engineer.
                  <span className="text-gray-500">
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
                  for the web with React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer className="fixed bottom-0 w-full" />
    </>
  )
}

export default Home
