import React from "react"

import "../styles/app.css"

export default function Home() {
  return (
    <div className="flex items-center bg-gray-200 h-full">
      <div className="flex-1 text-center">
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
            className="bg-black text-white hover:bg-white hover:text-black font-bold py-3 px-4 rounded"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  )
}
