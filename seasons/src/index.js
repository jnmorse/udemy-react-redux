import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: null,
      longitude: null,
      errorMessage: null
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }),
      error => this.setState({ errorMessage: error.message })
    )
  }

  render() {
    if (this.state.errorMessage) {
      return <div>error: {this.state.errorMessage}</div>
    } else if (!this.state.latitude) {
      return  <div>Loading...</div>
    }

    return (
      <div>
        <SeasonDisplay { ...this.state } />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
