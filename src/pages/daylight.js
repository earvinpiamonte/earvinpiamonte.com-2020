import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"
import Header from "../components/header"

import socialPreview from "../images/daylight-social-preview.png"
import daylight1 from "../images/daylight-ss-light-1.png"
import daylight4 from "../images/daylight-ss-dark-2.png"
import daylight5 from "../images/daylight-ss-notes-template-1.png"
import daylight6 from "../images/daylight-ss-notes-template-2.png"
import Footer from "../components/footer"

const Daylight = () => {
  return (
    <>
      <SEO
        title={`daylight, a Google Chrome browser extension that let's you write down notes directly on the new tab page`}
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
              <h1 className="text-4xl mb-10">daylight</h1>
              <p className="text-xl mb-6">
                Released on <time datetime="2020-10-04">October 4th, 2020</time>{" "}
                &mdash;{" "}
                <OutboundLink
                  href="https://chrome.google.com/webstore/detail/daylight/acfblhlodbfnocogojghkgnpoellplll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-blue-700"
                >
                  daylight
                </OutboundLink>{" "}
                is a Google Chrome browser{" "}
                <abbr title="Small programs that add new features to your browser and personalize your browsing experience.">
                  extension
                </abbr>{" "}
                that let's you write down notes directly on the new tab page.
              </p>
              <div className="mb-4">
                <div className="border border-gray-200 shadow-xl rounded-tl-lg rounded-tr-lg bg-gray-100">
                  <div className="py-2 px-2 bg-gray-200 rounded-tl-md rounded-tr-md flex items-center">
                    <div className="rounded-full h-4 w-4 bg-red-400 flex mr-3 "></div>
                    <div className="rounded-full h-4 w-4 bg-yellow-400 flex mr-3 "></div>
                    <div className="rounded-full h-4 w-4 bg-green-400 flex mr-3 "></div>
                    <div className="flex-auto px-2 py-1 ml-5 mr-1 rounded-md bg-white text-xs">
                      chrome://newtab
                    </div>
                  </div>
                  <img
                    src={daylight1}
                    loading="lazy"
                    alt="daylight screenshot light 1,"
                  />
                </div>
              </div>
            </article>
            <div className="mb-8">
              <h2 className="text-xl text-gray-900 mb-2">Add to Chrome</h2>{" "}
              <p>
                Get <strong>daylight</strong> on{" "}
                <OutboundLink
                  href="https://chrome.google.com/webstore/detail/daylight/acfblhlodbfnocogojghkgnpoellplll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-blue-700"
                >
                  Chrome Web Store
                </OutboundLink>
                .
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl text-gray-900 mb-2">Features</h2>{" "}
              <ul class="list-disc list-inside pl-4">
                <li className="mb-1">
                  Opt in to automatically reset your notes from your template
                  (resets at midnight)
                </li>
                <li className="mb-1">
                  Easily copy your notes for the day with a copy to clipboard
                  button and send it anywhere
                </li>
                <li className="mb-1">Download current notes as text file</li>
                <li className="mb-1">Dark mode? Oh You're darn right</li>
              </ul>
            </div>

            <div className="mb-8" id="notes-template">
              <h2 className="text-xl text-gray-900 mb-2">Notes template</h2>{" "}
              <p className="mb-2">
                You may use these available "variables" to the{" "}
                <em className="font-semibold">Notes template</em> of your
                Settings.
              </p>
              <h3 className="text-lg mb-2">Available variables:</h3>
              <ul class="list-disc list-inside pl-4 mb-2">
                <li className="mb-1">
                  <code className="bg-yellow-300 rounded">[current_date]</code>{" "}
                  - sets the current date
                </li>
                <li className="mb-1">
                  <code className="bg-yellow-300 rounded">[current_time]</code>{" "}
                  - sets the current time
                </li>
              </ul>
              <h3 className="text-lg mb-2">Example usage</h3>
              <p className="mb-2">
                Screenshot of Settings page for Notes template.
              </p>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <div className="rounded border border-gray-100 shadow-xl bg-gray-100 mb-8">
                    <div className="py-2 px-2 bg-gray-200 rounded-tl-md rounded-tr-md flex items-center">
                      <div className="rounded-full h-4 w-4 bg-red-400 flex mr-3 "></div>
                      <div className="rounded-full h-4 w-4 bg-yellow-400 flex mr-3 "></div>
                      <div className="rounded-full h-4 w-4 bg-green-400 flex mr-3 "></div>
                      <div className="flex-auto px-2 py-1 ml-5 mr-1 rounded-md bg-white text-xs">
                        chrome://newtab
                      </div>
                    </div>
                    <img
                      src={daylight5}
                      loading="lazy"
                      alt="daylight settings screenshot for notes template,"
                    />
                  </div>
                </div>
              </div>
              <p className="mb-2">
                The notes template will then be displayed on the notes page as
                below:
              </p>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <div className="rounded border border-gray-100 shadow-xl bg-gray-100">
                    <div className="py-2 px-2 bg-gray-200 rounded-tl-md rounded-tr-md flex items-center">
                      <div className="rounded-full h-4 w-4 bg-red-400 flex mr-3 "></div>
                      <div className="rounded-full h-4 w-4 bg-yellow-400 flex mr-3 "></div>
                      <div className="rounded-full h-4 w-4 bg-green-400 flex mr-3 "></div>
                      <div className="flex-auto px-2 py-1 ml-5 mr-1 rounded-md bg-white text-xs">
                        chrome://newtab
                      </div>
                    </div>
                    <img
                      src={daylight6}
                      loading="lazy"
                      alt="daylight notes template on notes page,"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl text-gray-900 mb-2">Screenshots</h2>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <div className="rounded border border-gray-100 shadow-xl bg-gray-100">
                    <div className="py-2 px-2 bg-gray-200 rounded-tl-md rounded-tr-md flex items-center">
                      <div className="rounded-full h-4 w-4 bg-red-400 flex mr-3 "></div>
                      <div className="rounded-full h-4 w-4 bg-yellow-400 flex mr-3 "></div>
                      <div className="rounded-full h-4 w-4 bg-green-400 flex mr-3 "></div>
                      <div className="flex-auto px-2 py-1 ml-5 mr-1 rounded-md bg-white text-xs">
                        chrome://newtab
                      </div>
                    </div>
                    <img
                      src={daylight4}
                      loading="lazy"
                      alt="daylight screenshot dark 2,"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl text-gray-900 mb-2">Development</h2>
              <p>
                The source code of this project is publicly available on{" "}
                <OutboundLink
                  href="https://github.com/earvinpiamonte/daylight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-blue-700"
                >
                  GitHub
                </OutboundLink>{" "}
                and is developed and maintained by{" "}
                <OutboundLink
                  href="https://twitter.com/earvinpiamonte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-blue-700"
                >
                  @earvinpiamonte
                </OutboundLink>
                .
              </p>
            </div>
            <div className="mb-16">
              <h2 className="text-xl text-gray-900 mb-2">Support</h2>
              <p>
                This project is completely free and developed during my free
                time. If this piece of software helps you, consider donating any
                amount on my{" "}
                <OutboundLink
                  href="https://ko-fi.com/earvinpiamonte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-blue-700"
                >
                  Ko-fi
                </OutboundLink>{" "}
                page. Thanks!
              </p>
            </div>
            <div className="mb-8">
              <blockquote className="p-4 italic border-l-4 text-gray-600 border-yellow-400 quote">
                <p className="mb-2">
                  "Bad luck, I don't wanna be home at midnight ... Sun's up, I
                  don't really wanna fight the daylight ..."
                </p>
                <cite>
                  -
                  <OutboundLink
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700"
                  >
                    Joji
                  </OutboundLink>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Daylight
