import React, { Component } from 'react';
import './App.css';
const randomID = require('random-id');

class App extends Component {

  componentDidMount() {
    const id = randomID();
    console.log(id);

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
