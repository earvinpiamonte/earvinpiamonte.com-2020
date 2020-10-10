import React from "react"

import { Link } from "gatsby"

import SEO from "../components/seo"

import "../styles/app.css"
import jennieGIF from "../images/jennie-sigh.gif"
import pageNotFoundPreview from "../images/404-preview.jpg"

const PageNotFound = () => {
  return (
    <>
      <SEO
        title={`Page not found but Jennie`}
        image={{
          src: pageNotFoundPreview,
          width: 470,
          height: 270,
        }}
      />
      <div className="flex items-center bg-gray-900 h-full">
        <div className="flex-1 text-center">
          <div className="flex justify-center mb-4">
            <picture>
              <source
                srcset={jennieGIF}
                className="object-contain h-50"
                media="(prefers-reduced-motion: no-preference)"
              />
              <img
                src={pageNotFoundPreview}
                className="object-contain h-50"
                alt="Jennie Kim my loves <3"
              />
            </picture>
          </div>
          <p className="text-2xl text-white mb-4">Page not found {":("}</p>
          <p className="text-gray-500">
            <Link to="/" className="font-weight-bold underline">
              <small>Go to home page</small>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
