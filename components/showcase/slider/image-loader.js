import React, { useState, useRef } from 'react'
import { useAmp } from 'next/amp'

const ImageLoader = ({ item, className, ...props }) => {
  const imageRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  const node = imageRef.current
  if (node) node.onload = () => setLoaded(true)
  // within a second just show it
  setTimeout(() => setLoaded(true), 1024)

  const isAmp = useAmp()
  const img = { ref: imageRef, src: item.src }

  return (
    <div
      className={`src ${loaded ? 'loaded' : 'loading'} ${className}`}
      {...props}
    >
      {isAmp ? <amp-img {...img} layout="fill" /> : <img {...img} />}
      <style jsx>{`
        @keyframes show {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .src {
          transition: opacity 0.2s ease;
        }
        .loading {
          opacity: 0;
        }
        .loaded {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default ImageLoader
