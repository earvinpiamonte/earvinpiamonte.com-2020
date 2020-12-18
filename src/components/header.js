import React, { useState } from "react"

import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Modal from "../components/modal"

const Header = props => {
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)
  const [modalVisibility, setModalVisibility] = useState(false)

  React.useEffect(() => {
    document.body.style.overflowY = modalVisibility ? "hidden" : "auto"
  }, [modalVisibility])

  return (
    <>
      <Modal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        title={`Freelancer status update`}
        body={
          <div className="tracking-wide">
            <p className="mb-2">
              I'm currently not available for freelance works but you may still
              view my freelancer profile.
            </p>
          </div>
        }
        footer={
          <p className="mb-2">
            <OutboundLink
              href="https://freelancer.com/u/earvinpiamonte"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-blue-700"
            >
              <svg
                className="w-4 h-4 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
              <span className="ml-1 align-middle">View Freelancer profile</span>
            </OutboundLink>
          </p>
        }
      />
      <header className={`bg-gray-900 ${props.className}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <nav className="flex items-center justify-between flex-wrap lg:p-6">
                <div className="w-full lg:w-auto lg:mr-12 flex items-center justify-between py-4 px-6 lg:py-0 lg:px-0">
                  <div>
                    <Link
                      to="/"
                      className="font-semibold text-xl text-white tracking-tight"
                    >
                      <span>N.E.P.</span>
                    </Link>
                  </div>
                  <div className="lg:hidden">
                    <button
                      className="text-white p-1"
                      onClick={() => setDropdownMenuOpen(!dropdownMenuOpen)}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {!dropdownMenuOpen && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          ></path>
                        )}
                        {dropdownMenuOpen && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  className={`w-full lg:w-auto lg:flex-grow lg:flex lg:items-center py-4 px-6 lg:py-0 lg:px-0 bg-gray-900 border-b-4 lg:border-b-0 shadow-lg lg:shadow-none lg:bg-transparent ${
                    dropdownMenuOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="text-sm lg:flex-grow">
                    <Link
                      to="/"
                      className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white lg:mr-6"
                    >
                      Home
                    </Link>
                    <Link
                      to="/portfolio"
                      className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white lg:mr-6"
                      activeClassName="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                      Portfolio
                    </Link>
                    <Link
                      to="/daylight"
                      className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white lg:mr-6"
                      activeClassName="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                      daylight
                    </Link>
                    <Link
                      to="/blog"
                      className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white lg:mr-6"
                      activeClassName="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/playlist"
                      className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white lg:mr-6"
                      activeClassName="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                      Playlist
                    </Link>
                    <Link
                      to="/resume"
                      className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white lg:mr-6"
                      activeClassName="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
                    >
                      Resume
                    </Link>
                  </div>
                  <div className="mb-4 lg:mb-0">
                    <button
                      className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0"
                      onClick={() => {
                        setModalVisibility(true)
                        console.log(modalVisibility)
                      }}
                    >
                      <svg
                        className="w-4 h-4 inline-block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                      <span className="ml-1 align-middle">Hire me</span>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
