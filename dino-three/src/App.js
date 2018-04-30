import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import JobDetails from './components/JobDetails'
import InputForm from './components/InputForm'
import Preview from './components/Preview'
import Footer from './components/Footer'


class App extends Component {
  state = { listing: {} }

  componentDidMount() {
    fetch('./listing.json')
    .then(response => response.json())
    .then(listing => {
      this.setState({
        listing: listing
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails listing={this.state.listing} />
          <InputForm />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
