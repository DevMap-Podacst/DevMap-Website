import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://anchor.fm/devmappodcast', label: 'Anchor.FM' },
  { href: 'https://www.stitcher.com/podcast/anchor-podcasts/devmap-podcast', label: 'Stitcher'},
  // { href: 'https://www.breaker.audio/devmap-podcast', label: 'Breaker'},
  // { href: 'https://open.spotify.com/show/1V8gY5mZUsVdE0VAujPD1C', label: 'Spotify'},
  // { href: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy83MGI0YWY4L3BvZGNhc3QvcnNz', label: 'Google Podcasts'},
  // { href: 'https://castbox.fm/channel/id1446889', label: 'Castbox'},
  // { href: 'https://pca.st/g9Fg', label: 'Pocket Casts'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})


const Nav = () => (
  <nav>
    <ul className='mainNav'>
      <li className='devmap-Links'>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul className='pcast-AppsList'>
        <li>Listen on:</li>
        {links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :globa;(html) {
        margin: 0;
        padding: 0;
        box-sixing: border-box;
      }
      :global(body) {
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
        font-size: 16px;
        background: #1E1E1E;
      }
      nav {
        text-align: center;
      }
      .mainNav {
        display: grid;
        grid-template-rows: minmax(30px, 1fr);
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas:
          "links links . . appLinks appLinks";
        justify-content: space-between;
      }
      .pcast-AppsList {
        padding: 4px 16px;
        grid-area: appLinks;
        display: flex;
        justify-content: space-between;
      }
      .devmap-Links{
        grid-area: links;
      }
      li {
        display: flex;
        padding: 6px 8px;
        color: #ffffff;
        font-size: 1.25rem;
      }
      a {
        color: #ffffff;
        text-decoration: none;
        font-size: 1.25rem;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </nav>
)

export default Nav
