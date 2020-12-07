export default () => (
  <footer>
    <div className="container">
      <a href="https://lachlanjc.com" target="_blank">
        Site by Lachlan Campbell
      </a>
      <a className="github" href="https://github.com/lachlanjc/gasp">
        Source code
      </a>
    </div>
    <style jsx>{`
      footer {
        background-color: #fafafa;
        border-top: 1px solid #eaeaea;
        font-size: 14px;
        margin-top: 50px;
      }

      a {
        text-decoration: none;
        color: #666;
        font-size: 1.4rem;
        padding: 15px 0;
        transition: color 0.2s ease;
      }
      a:hover,
      a:focus {
        color: #222;
      }

      @media (prefers-color-scheme: dark) {
        footer {
          background-color: #111;
          border-top-color: #222;
        }

        a {
          color: #aaa;
        }
        a:hover,
        a:focus {
          color: #eaeaea;
        }
      }

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1000px;
        margin: 0 auto;
        padding: 10px 0;
      }

      @media (max-width: 512px) {
        .container {
          flex-direction: column;
          justify-content: center;
          width: 100%;
          padding: 10px;
        }
      }
    `}</style>
  </footer>
)
