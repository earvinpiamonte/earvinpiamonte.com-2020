import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"
import Header from "../components/header"

import socialPreview from "../images/social-preview.jpg"

const Resume = () => {
  return (
    <>
      <SEO
        title={`Feel free to download my most recent Resume`}
        image={{
          src: socialPreview,
          width: 1280,
          height: 640,
        }}
      />
      <Header />
      <main className="container mx-auto pt-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
            <article className="mb-8">
              <h1 className="text-4xl mb-10">Resume</h1>
              <p className="text-xl">
                Feel free to{" "}
                <OutboundLink
                  href="https://drive.google.com/file/d/1PK3yBcFr5TwKfPx78QFmJglqieTFe2Rx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-blue-700"
                >
                  download
                </OutboundLink>{" "}
                my most recent Resume. Last updated on{" "}
                <time datetime="2020-10-16">October 2020</time>.
              </p>
            </article>

            <div className="mb-64 responsive-embed border-2 bg-gray-200 border-gray-900 rounded-lg">
              <iframe
                src="https://drive.google.com/file/d/1PK3yBcFr5TwKfPx78QFmJglqieTFe2Rx/preview"
                title="Resume PDF"
                width="640"
                height="480"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Resume
