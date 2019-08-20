const SlideInformation = ({ title, href }) => (
  <section>
    <h2>{title}</h2>
    <style jsx>{`
      section {
        margin: 0 auto 25px;
        text-align: center;
      }

      h2 {
        font-size: 36px;
        font-style: normal;
        font-weight: 800;
        margin-bottom: 0;
      }
    `}</style>
  </section>
)

export default SlideInformation
