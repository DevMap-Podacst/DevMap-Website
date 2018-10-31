import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://anchor.fm/devmappodcast', label: 'Anchor.FM', image: '/static/anchor.png' },
  { href: 'https://itunes.apple.com/us/podcast/devmap-podcast/id1437898718', label: 'Apple Podcasts', image: '/static/apple_podcasts.png'},
  { href: 'https://www.breaker.audio/devmap-podcast', label: 'Breaker', image: '/static/breaker.png'},
  { href: 'https://castbox.fm/channel/id1446889', label: 'Castbox', image: '/static/castbox.png'},
  { href: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy83MGI0YWY4L3BvZGNhc3QvcnNz', label: 'Google Podcasts', image: '/static/google_podcasts_outline.png'},
  { href: 'https://pca.st/g9Fg', label: 'Pocket Casts', image: '/static/pocket_casts.png'},
  { href: 'https://radiopublic.com/devmap-podcast-8gvzE9', label: 'RadioPublic', image: '/static/radiopublic.png'},
  { href: 'https://open.spotify.com/show/1V8gY5mZUsVdE0VAujPD1C', label: 'Spotify', image: '/static/spotify.png'},
  { href: 'https://www.stitcher.com/podcast/anchor-podcasts/devmap-podcast', label: 'Stitcher', image: '/static/stitcher.png'},
]


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
        {links.map(({href, label, image }) => (
            <li key={label}>
              <Link href={href}>
                <a>
                  <img className="icons" src={image} alt={label} />
                </a>
              </Link>
            </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(html) {
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
        grid-template-columns: repeat(7, 1fr);
        grid-template-areas:
          ". links links .  appLinks appLinks .";
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
      .icons{
        height: 30px;
        width: 30px;
      }
    `}</style>
  </nav>
)

export default Nav
