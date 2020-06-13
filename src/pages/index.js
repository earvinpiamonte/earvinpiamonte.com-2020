import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

export default function Home() {
  return (
    <section className="bg-black h-full">
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-12 gap-4 content-center h-full">
          <div className="col-span-8 col-start-3">
            <h1 className="text-3xl mb-4 text-gray-200 tracking-wider uppercase">
              Noel Earvin Piamonte &middot; Software Developer
            </h1>
            <div className="mb-10 text-lg tracking-wider">
              <p className="mb-1 text-gray-200">
                Hi there, I&apos;m an independent website and React Native app
                developer at{" "}
                <OutboundLink
                  href="https://www.freelancer.com/u/earvinpiamonte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-blue-700"
                >
                  Freelancer.com
                </OutboundLink>
                .
              </p>
              <p className="mb-8 text-gray-200">
                I'm also a Senior <span className="line-through">Web</span>{" "}
                Developer for{" "}
                <OutboundLink
                  href="https://bentacos.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-blue-700"
                >
                  Bentacos
                </OutboundLink>
                .
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
                and Jennie Kim {"<3"}
              </p>
            </div>
            <div className="mb-4">
              <OutboundLink
                href="https://drive.google.com/open?id=1fyKTOnutzM3Ke5pFpzto0L1FQYeXeVBp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-black hover:bg-gray-500 font-bold py-2 px-4 rounded"
              >
                View Resume
              </OutboundLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
