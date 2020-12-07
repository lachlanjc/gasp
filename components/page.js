import Header from '../components/header'
import Footer from '../components/footer'

const Page = ({ bg = '#fafafa', color = '#222', children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
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

      @media (prefers-color-scheme: dark) {
        html,
        body {
          background-color: ${color};
          color: ${bg};
        }
      }

      ::selection {
        background-color: #ec008c;
        color: #fff;
      }
    `}</style>
  </div>
)

export default Page
