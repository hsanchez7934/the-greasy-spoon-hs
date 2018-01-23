import React, { Component } from 'react';
import './App.css';
import apiKey from '../apikey.js';

class App extends Component {

  componentDidMount() {
    fetch(`https://check-api.herokuapp.com/tables`, {
      headers: {
        Authorization: apiKey
      }
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }

  render() {
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
