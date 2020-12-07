import RoundButton from '../round-button'

const Intro = () => (
  <section>
    <h1>Gasp!</h1>
    <h2>A guide to your body, your mind, and being alive.</h2>
    <p>
      A zine from your friends at Planned Parenthood Generation Action @ Penn
      State University.
      <br />
      Because sex ed is too important to ignore.
    </p>
    <div>
      <RoundButton color="white" href="/static/gasp.pdf" download="gasp.pdf">
        Download
      </RoundButton>
      <RoundButton color="primary" href="/read/cover/">
        Read now »
      </RoundButton>
    </div>
    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        max-width: 700px;
        margin: 0 auto;
        padding: 0 25px;
      }
      h1,
      h2 {
        color: #ec008c;
        line-height: 1.25;
        margin: 0;
        padding: 0;
      }
      h1 {
        font-size: 128px;
        font-style: italic;
        font-weight: 900;
      }
      h2 {
        font-size: 48px;
      }
      p {
        color: #666666;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.625;
        max-width: 512px;
        margin: 30px auto;
      }
      div {
        display: flex;
      }
      @media (max-width: 768px) {
        h1 {
          font-size: 72px;
          margin-bottom: 10px;
        }
        h2 {
          font-size: 24px;
        }
        div {
          flex-direction: column-reverse;
        }
      }
      @media (prefers-color-scheme: dark) {
        p {
          color: #aaa;
        }
      }
    `}</style>
  </section>
)

export default Intro
