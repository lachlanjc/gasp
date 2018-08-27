import React from 'react'

class ImageLoader extends React.Component {
  state = {
    loaded: false
  }

  constructor(props) {
    super(props)
    this.imageRef = React.createRef()
  }

  handleLoaded = () => {
    this.setState({ loaded: true })
  }

  componentDidMount() {
    const node = this.imageRef.current

    node.onload = this.handleLoaded
    if (node.complete && !this.state.loaded) {
      this.handleLoaded()
    }
  }

  render() {
    const { item, className } = this.props
    const { src } = item
    const { loaded } = this.state
    return (
      <div className={className}>
        <img
          className={`src ${loaded ? 'loaded' : 'loading'}`}
          ref={this.imageRef}
          src={src}
        />
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
}

export default ImageLoader
