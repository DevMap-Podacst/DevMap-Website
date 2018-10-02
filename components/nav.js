import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://anchor.fm/devmappodcast', label: 'Anchor.FM' },
  { href: 'https://www.stitcher.com/podcast/anchor-podcasts/devmap-podcast', label: 'Stitcher'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
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
      :global(body) {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
        background: #303030;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
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
