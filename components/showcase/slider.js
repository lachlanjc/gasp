import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Meta from '../meta'
import Image from '../image'
import ImageLoader from './slider/image-loader'
import SlideInformation from './slider/slide-information'
import Navigation from './slider/navigation'
import MobileNavigation from './slider/mobile-navigation'

const Slider = ({ currentSlide = {}, previousSlide = {}, nextSlide }) => (
  <section>
    <Meta title={`${currentSlide.title} – Gasp!`} url={currentSlide.link} />
    <div className="container">
      <div className="nav prev">
        <Navigation previous item={previousSlide} />
      </div>
      <div className="slider">
        <Image src={currentSlide.src} margin={0}>
          <TransitionGroup>
            <CSSTransition
              key={currentSlide.src}
              timeout={512}
              classNames="fade"
            >
              <ImageLoader item={currentSlide} />
            </CSSTransition>
          </TransitionGroup>
        </Image>
      </div>
      <div className="nav next">
        <Navigation item={nextSlide} />
      </div>
    </div>
    <SlideInformation title={currentSlide.title} href={currentSlide.link} />
    <div className="mobile-navigation">
      <MobileNavigation prev item={previousSlide} />
      <MobileNavigation item={nextSlide} />
    </div>
    <style jsx>{`
      .mobile-navigation {
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        margin: 0 auto;
        display: none;
      }

      .slider :global(.fade-enter) {
        opacity: 0.01;
      }

      .slider :global(.fade-enter.fade-enter-active) {
        opacity: 1;
        transition: opacity 500ms ease-in;
      }

      .slider :global(.fade-exit) {
        opacity: 1;
      }

      .slider :global(.fade-exit.fade-exit-active) {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
      }

      .container {
        display: flex;
        min-height: 0;
        min-width: 0;
        justify-content: space-between;
        align-items: center;
        overflow-x: hidden;
        padding-bottom: 60px;
      }

      .slider {
        flex: 1;
        margin: 0 60px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.0625),
          0px 20px 40px rgba(0, 0, 0, 0.125);
        max-width: 892px;
        border-radius: 8px;
        overflow: hidden;
        line-height: 0;
      }

      .slider .slick-slider {
        width: 1280px;
        height: 734px;
      }

      .nav {
        width: 200px;
        min-width: 200px;
        height: 150px;
        overflow: hidden;
        transition: all 0.2s ease;
      }
      .nav:hover {
        transition: all 0.2s ease-in-out;
      }

      .nav.prev {
        margin-left: -40px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      .nav.prev:hover {
        transform: translateX(40px);
      }
      .nav.next {
        margin-right: -40px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      .nav.next:hover {
        transform: translateX(-40px);
      }

      @media (max-width: 1024px) {
        .mobile-navigation {
          display: flex;
        }

        .nav {
          display: none;
        }

        .slider {
          margin: 0 10px;
        }
      }
    `}</style>
  </section>
)

export default Slider
