import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const geoOptions = {
  enableHighAccuracy: false,
  timeout: 10000,
  maximumAge: ((1000 * 60) * 60) * 5
}

class App extends Component {
  state = {
    latitude: null,
    longitude: null
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }),
      error => console.error(`${error.code}: ${error.message}`),
      geoOptions
    );
  }

  render() {
    return (
      <>
        <div>{`Latitude ${this.state.latitude}`}</div>
        <div>{`Longitude ${this.state.longitude}`}</div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
