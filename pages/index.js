import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Title from '../components/title'
import Episodes from '../components/episodes'

/*
  Icon Links
  Anchor
  Breaker
  Google Podcasts
  RadioPublic
  Stitcher
  Apple Podcasts
  Castbox
  Pocket Casts
  Spotify
*/

const Home = () => (
  <div>
    <Nav />
    <Head title="DevMap Podcast" />
    <Title />
    <Episodes />
    <style jsx>{`
      .container {
        width: 100%;
        color: #333;        
      }
    `}</style>
  </div>
)

export default Home
