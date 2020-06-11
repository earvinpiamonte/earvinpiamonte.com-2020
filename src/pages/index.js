import React from "react"

import ReactGA from "react-ga"

import "../styles/app.css"

// UA-50697157-1

if (process.env.NODE_ENV !== "development") {
  ReactGA.initialize("UA-50697157-1")
  ReactGA.pageview(window.location.pathname + window.location.search)
}

export default function Home() {
  return (
    <div className="flex items-center bg-black h-full">
      <div className="flex-1 text-center text-gray-200">
        <h1 className="text-2xl mb-2">Noel Earvin Piamonte</h1>
        <div className="mb-8 text-lg">
          <p className="mb-1">
            I&apos;m an Independent Website and React Native Developer at{" "}
            <a
              href="https://www.freelancer.com/u/earvinpiamonte/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              Freelancer.com
            </a>
            .
          </p>
          <p>
            I also work as a Senior Web Developer for{" "}
            <a
              href="https://bentacos.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              Bentacos
            </a>
            .
          </p>
        </div>
        <div>
          <a
            href="https://drive.google.com/open?id=1fyKTOnutzM3Ke5pFpzto0L1FQYeXeVBp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-black hover:bg-gray-500 font-bold py-2 px-4 rounded"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  )
}
