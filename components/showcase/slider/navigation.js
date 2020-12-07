import ShowcaseLink from './showcase-link'
import Image from 'next/image'
import ArrowPrevious from '../../icons/arrow-previous'
import ArrowNext from '../../icons/arrow-next'

const Navigation = ({ previous, item }) => (
  <ShowcaseLink item={item}>
    <a className={`button ${previous ? 'prev' : 'next'}`}>
      <div className="thumbnail">
        <Image
          src={item.src}
          key={item.src}
          width={446}
          height={306}
          alt={item.title}
        />
      </div>
      <div className="arrow">
        {previous ? <ArrowPrevious /> : <ArrowNext />}
      </div>
      <style jsx>{`
        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          line-height: 0;
          box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.12);
        }

        .thumbnail {
          max-width: 200%;
          position: absolute;
          top: 0;
          transition: all 0.2s ease;
          overflow: hidden;
        }
        .thumbnail::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
        }

        @media (prefers-color-scheme: dark) {
          .thumbnail :global(img) {
            filter: invert(1) hue-rotate(180deg);
          }
        }

        .button:hover .thumbnail {
          transform: scale(1.4);
        }
        .prev .thumbnail {
          border-radius: 0 6px 6px 0;
          left: 0;
        }
        .next .thumbnail {
          border-radius: 6px 0 0 6px;
          right: 0;
        }

        .arrow {
          position: absolute;
        }
      `}</style>
    </a>
  </ShowcaseLink>
)

export default Navigation
