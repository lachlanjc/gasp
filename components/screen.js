import React from 'react'

const Screen = ({ id, children, fullWidth = true, offset = null }) => (
  <div id={id} className="screen">
    <div className="wrap">{children}</div>
    <style jsx>{`
      .screen {
        display: flex;
        min-height: 90vh;
        align-items: center;
        min-height: ${offset != null ? `calc(90vh - ${offset}px)` : ''};
      }
      .wrap {
        margin: auto;
        width: ${fullWidth ? '100%' : 'auto'};
      }
    `}</style>
  </div>
)

export default Screen
