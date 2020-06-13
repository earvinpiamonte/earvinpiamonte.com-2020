import React from "react"

import { Link } from "gatsby"

import SEO from "../components/SEO"

import "../styles/app.css"
import jennieGIF from "../images/jennie-sigh.gif"

const PageNotFound = () => {
  return (
    <>
      <SEO title={`Page not found`} />
      <div className="flex items-center bg-black h-full">
        <div className="flex-1 text-center">
          <div className="flex justify-center mb-4">
            <img
              src={jennieGIF}
              className="object-contain h-50"
              alt="Jennie Kim my loves <3"
            />
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
