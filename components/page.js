import Header from '../components/header'
import Footer from '../components/footer'
import NProgress from 'nprogress'
import { debounce } from 'lodash'
import RouterEvents from '../lib/router-events'

const start = debounce(NProgress.start, 200)
RouterEvents.on('routeChangeStart', start)
RouterEvents.on('routeChangeComplete', url => {
  start.cancel()
  NProgress.done()
})
RouterEvents.on('routeChangeError', () => {
  start.cancel()
  NProgress.done()
})

export default ({ bg = '#fff', color = '#000', children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
    <link
      href="https://fonts.googleapis.com/css?family=Nunito:400,800,900i"
      rel="stylesheet"
    />
    <style jsx global>{`
      html {
        height: 100%;
        box-sizing: border-box;
        font-size: 62.5%;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-family: Nunito, -apple-system, BlinkMacSystemFont, Roboto,
          'Segoe UI', 'Helvetica Neue', sans-serif;
        text-rendering: optimizeLegibility;
        line-height: 1.5;
        font-size: 1.6rem;
      }

      a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      html,
      body {
        background-color: ${bg};
        color: ${color};
      }

      ::selection {
        background-color: #ec008c;
        color: #fff;
      }

      .prevent-scroll {
        overflow: hidden;
      }

      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: black;
      }
    `}</style>
  </div>
)
