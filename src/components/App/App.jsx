import React, { Component } from 'react';
import './App.css';
import apiKey from '../../apikey.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from '../HomeScreen/HomeScreen.jsx';

class App extends Component {

  componentDidMount() {
    this.cleanSlate();
  }


  cleanSlate = () => {
    fetch(`https://check-api.herokuapp.com/checks`, {
      method: 'DELETE',
      headers: {
        Authorization: apiKey
      }
    })
      .then(response => response.json())
      .then(response => response)
      .catch(error => error);
  };

  render() {
    return (
      <div className="App">
        <HomeScreen />
      </div>
    );
  }
}

export default App;
