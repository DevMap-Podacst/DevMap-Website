import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Episodes from '../components/episodes'



const Home = () => (
  <div>
    <Head title="DevMap Podcast" />
    <Nav />

    <div className="container">
      <img src="../static/Dev-Map-Logo.png" className="heroImage" />
      <h1 className="title">Welcome to DevMap!</h1>
      <p className="description">
        The Podcast for Junior Developers and the cure for Imposter Syndrome
      </p>

      <div className="row">
        {Episodes.map( ({key, href, title}) => (
          <div key={key}>
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </div>
        ))}

        
        {/* <Link href="https://github.com/segmentio/create-next-app">
          <a className="card">
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </Link> */}
      </div>
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        color: #333;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: repeat(6 1fr);
		grid-template-areas:
		  ". logo logo ." 
          ". info info ."
          ". episodes episodes .";

        justify-content: center;
        align-content: center;
      }
      .heroImage {
        height: 300px;
		grid-area: logo;
		justify-self: center;
		align-self: center;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
        color: #ffffff;
        grid-area: info;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
		justify-content: space-around;
		grid-area: episodes;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
