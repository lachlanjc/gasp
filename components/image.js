import React, { Component } from 'react'
import PropTypes from 'prop-types'

// This component might look a little complex
// because one could argue that keeping the aspect ratio
// of an image can be solved with `height: auto`,
// but it's actually not that easy if you want to prevent
// element flickering

// Because if you want to do that, you need to set the aspect
// ratio of the image's container BEFORE the image loads

class Image extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
  }

  render() {
    const {
      caption,
      width = 892,
      height = 612,
      margin = 25,
      ...rest
    } = this.props

    const aspectRatio = String((height / width) * 100) + '%'

    return (
      <figure style={{ width, paddingBottom: aspectRatio }}>
        <img {...rest} />

        <style jsx>{`
          figure {
            display: block;
            text-align: center;
            margin: ${margin}px 0;
            max-width: 100%;
            position: relative;
          }
          figure :global(img) {
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
        @media (prefers-color-scheme: dark) {
          .root {
            filter: invert(1) hue-rotate(90deg);
          }
        `}</style>
      </figure>
    )
  }
        }
}

export default Image
