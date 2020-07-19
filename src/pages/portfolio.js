import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import { Link } from "gatsby"

import SEO from "../components/seo"

import "../styles/app.css"
import sampleProjectThumbnail from "../images/social-preview.jpg"

const Portfolio = () => {
  return (
    <>
      <SEO title={`Portfolio`} />
      <header className="bg-gray-900 mb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 col-start-3">
              <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-12">
                  <span className="font-semibold text-xl tracking-tight">
                    Noel Earvin Piamonte
                  </span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                  <div className="text-sm lg:flex-grow">
                    <Link
                      to="/"
                      className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                      Home
                    </Link>
                    <Link
                      to="/portfolio"
                      className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                      activeClassName="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                      Portfolio
                    </Link>
                  </div>
                  <div>
                    <OutboundLink
                      href="https://www.freelancer.com/u/earvinpiamonte/"
                      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hire me
                    </OutboundLink>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 col-start-3 px-6">
            <h1 className="text-4xl text-gray-900 mb-10">Portfolio</h1>

            <article className="mb-8 border rounded-lg p-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="lg:col-span-5 col-span-12">
                  <div>
                    <img
                      src={sampleProjectThumbnail}
                      alt="Project thumbnail,"
                      className="rounded border"
                      draggable={false}
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 col-span-12">
                  <h2 className="mb-1 uppercase text-gray-900 font-bold">
                    <Link to="portfolio" className="hover:underline">
                      Project title here
                    </Link>
                  </h2>
                  <p className="mb-3 text-gray-600">Laravel, Bootstrap</p>

                  <p className="mb-3 text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa recusandae quibusdam corrupti quod illum corporis fugit
                    libero. Naneun gongjuwa salang-e ppajyeossda.
                  </p>
                  <p className="mb-3">
                    <OutboundLink
                      href="javascript:"
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
          </div>
        </div>
      </main>
    </>
  )
}

export default Portfolio
