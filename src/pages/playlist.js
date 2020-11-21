import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"

import socialPreview from "../images/playlist-social-preview.jpg"
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
              <p className="text-xl">
                Mkaaay, I got tired of updating the previous playlist so here's
                a playlist with tracks that are currently "On Repeat" on my
                Spotify account :P
              </p>
            </article>

            <div className="mb-64 responsive-embed border-2 bg-gray-200 border-gray-900 rounded-lg">
              <iframe
                src="https://open.spotify.com/embed/playlist/37i9dQZF1Epqlvz85gOHx2"
                title="Spotify playlist"
                width="640"
                height="720"
                class="mx-auto"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Playlist
