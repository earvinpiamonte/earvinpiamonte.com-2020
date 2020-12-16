import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"

import socialPreview from "../images/playlist-social-preview.jpg"
import spotify2020wrapped from "../images/Spotify2020WRAPPED.jpg"

import Footer from "../components/footer"

const Playlist = () => {
  return (
    <>
      <SEO
        title={`Check out the songs that I'm recently listening to`}
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
              <h1 className="text-4xl mb-10">Playlist</h1>
              <div className="p-4 mb-8 border-l-4 text-gray-600 border-gray-900 bg-gray-100">
                <p className="mb-2">
                  This page is going away soon. Hope you liked beautiful music
                  from my favorite music producers. Thank you for listening!
                </p>

                <p className="mb-2">
                  I'm building a new page called "Books" where I can share the
                  books that I'm reading. I still need to learn Google Books
                  APIs sooo.
                </p>
              </div>
              <p className="text-xl">
                Mkaaay, I got tired of updating the previous playlist so here's
                a playlist with tracks that are currently "On Repeat" on my
                Spotify account :P
              </p>
            </article>

            <div className="mb-8 responsive-embed border-2 bg-blue-900 border-gray-900 rounded-lg">
              <iframe
                src="https://open.spotify.com/embed/playlist/37i9dQZF1Epqlvz85gOHx2"
                title="Spotify playlist"
                width="640"
                height="720"
                className="mx-auto"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>

            <div className="mb-16">
              <h2 className="text-xl text-gray-900 mb-2">
                Spotify 2020 Wrapped
              </h2>
              <div>
                <img
                  src={spotify2020wrapped}
                  className="border-2 border-gray-900 rounded-lg"
                  loading="lazy"
                  alt="Spotify 2020 Wrapped screenshot,"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Playlist
