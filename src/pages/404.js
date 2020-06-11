import React from "react"

import "../styles/app.css"

import jennie from "../images/jennie-sigh.gif"

export default function PageNotFound() {
  return (
    <div className="flex items-center bg-black h-full">
      <div className="flex-1 text-center">
        <div className="flex justify-center mb-4">
          <img
            src={jennie}
            className="object-contain h-50"
            alt="Jennie Kim my loves <3"
          />
        </div>
        <p className="text-2xl text-white">Page not found {":("}</p>
      </div>
    </div>
  )
}
