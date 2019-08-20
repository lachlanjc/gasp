import ShowcaseLink from './showcase-link'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Image from '../../image'
import ArrowPrevious from '../../icons/arrow-previous'
import ArrowNext from '../../icons/arrow-next'
import ImageLoader from './image-loader'

const Navigation = ({ previous, item }) => (
  <ShowcaseLink item={item}>
    <a className={`button ${previous ? 'prev' : 'next'}`}>
      <div className="thumbnail">
        <Image width={892 / 2} height={612 / 2} src={item.src} margin={0}>
          <TransitionGroup>
            <CSSTransition key={item.src} timeout={500} classNames="fade">
              <ImageLoader item={item} />
            </CSSTransition>
          </TransitionGroup>
        </Image>
        />
      </div>
      <div className="arrow">
        {previous ? <ArrowPrevious /> : <ArrowNext />}
      </div>
      <style jsx>{`
        a :global(.fade-enter) {
          opacity: 0.01;
        }

        a :global(.fade-enter.fade-enter-active) {
          opacity: 1;
          transition: opacity 500ms ease-in;
        }

        a :global(.fade-exit) {
          opacity: 1;
        }

        a :global(.fade-exit.fade-exit-active) {
          opacity: 0.01;
          transition: opacity 300ms ease-in;
        }
        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.12);
        }

        a :global(img) {
          width: 100%;
        }

        .thumbnail {
          max-width: 200%;
          position: absolute;
          top: 0;
          transition: all 0.2s ease;
        }

        .thumbnail::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        }
        .button:hover .thumbnail {
          transform: scale(1.4);
        }
        .prev .thumbnail {
          left: 0;
        }
        .next .thumbnail {
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
