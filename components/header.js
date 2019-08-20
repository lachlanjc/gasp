import React from 'react'
import Link from 'next/link'
import Twitter from './icons/twitter'
import Facebook from './icons/facebook'

const link = 'https://gasp.netlify.com'
const twitterURL = (text, url) =>
  `https://twitter.com/intent/tweet?text=${text
    .split(' ')
    .join('%20')}&url=${url}`
const facebookURL = url => `https://www.facebook.com/sharer/sharer.php?u=${url}`

export default () => (
  <header>
    <div className="header__content">
      <Link href="/">
        <a className="logo">Gasp!</a>
      </Link>
      <div className="social">
        <a href={twitterURL('Gasp! a zine from Planned Parenthood', link)}>
          <Twitter />
        </a>
        <a href={facebookURL(link)}>
          <Facebook />
        </a>
      </div>
    </div>

    <style jsx>{`
      header {
        min-height: 144px;
        width: 100%;
        display: flex;
        align-items: center;
      }

      .header__content {
        width: 1000px;
        max-width: 100%;
        height: 72px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
      }

      .logo {
        color: #666;
        font-size: 24px;
        font-weight: 800;
        text-decoration: none;
      }

      .social a {
        color: #ec008c;
        margin-left: 15px;
      }

      @media (max-width: 1064px) {
        .header__content {
          width: 100%;
          padding-left: 32px;
          padding-right: 32px;
        }
      }
    `}</style>
  </header>
)
