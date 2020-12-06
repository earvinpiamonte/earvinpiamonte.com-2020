import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"

import socialPreview from "../images/social-preview.jpg"
import Footer from "../components/footer"

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
                I'm currently working as a Software Engineer at Infor PSSC, Inc.
                in Bonifacio Global City, Taguig, Philippines.
              </p>
            </article>

            <div className="mb-64 responsive-embed border-2 bg-gray-200 border-gray-900 rounded-lg">
              <p className="text-center my-20">
                Resume file no longer available.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Resume
