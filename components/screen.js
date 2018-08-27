import React from 'react'

const Screen = ({ id, children, fullWidth = true, offset = null }) => (
  <div
    id={id}
    className="screen"
    style={{
      minHeight: offset != null ? `calc(90vh - ${offset}px)` : ''
    }}
  >
    <div className="wrap">{children}</div>
    <style jsx>{`
      .screen {
        display: flex;
        min-height: 90vh;
        align-items: center;
      }
      .wrap {
        margin: auto;
        width: ${fullWidth ? '100%' : 'auto'};
      }
    `}</style>
  </div>
)

export default Screen
