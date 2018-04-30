import React from 'react'

import Preview from './Preview'

class InputForm extends React.Component {
  state = {
    message: '', 
    preview: ''
  }

  formSubmit = (event) => {
    event.preventDefault()
    this.setState({ 
      message: 'Your application was submitted!' 
    })
  }

  updatePreview = (event) => {
    this.setState({ preview: event.target.value })
  }

  render() {
    return(
      <div>
        <form id="application-input" onSubmit={this.formSubmit}>
          <label>Apply Here: </label>
          <textarea id="application-text" rows="8" cols="100" onKeyUp={this.updatePreview}></textarea>
          <input id="submit" type="submit" value="Submit" />
        </form>
        <p id='message'>{this.state.message}</p>
        <Preview preview={this.state.preview} />
      </div>
    )
  }
}

export default InputForm