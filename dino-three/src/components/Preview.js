import React from 'react'

class Preview extends React.Component {
  state = {
    showPreview: false
  }

  showPreview = () => {
    this.setState({ showText: !this.state.showText })
  }

  

  render() {
    const showText = this.state.showText
    return (
      <div> 
        <button id='preview-toggle' onClick={this.showPreview}>Show Preview</button>
        { showText ? <section id="application-preview">{this.props.preview}</section> : '' }
      </div>
    )
  }
}

export default Preview