import React from "react"

import { StaticQuery, graphql } from "gatsby"

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            siteMetadata {
              author
            }
          }
        }
      `}
      render={data => (
        <footer className="py-6 text-sm">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 md:col-start-3 px-6">
                <p className="text-gray-600">
                  &copy; {new Date().getFullYear()}{" "}
                  {data.site.siteMetadata.author}
                </p>
              </div>
            </div>
          </div>
        </footer>
      )}
    />
  )
}

export default Footer
