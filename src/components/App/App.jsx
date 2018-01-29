import React, { Component } from 'react';
import './App.css';
import apiKey from '../../apikey.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from '../HomeScreen/HomeScreen.jsx';

class App extends Component {

  componentDidMount() {
    // this.getTables();
      // this.getChecks();
  }


  getTables = () => {
    fetch(`https://check-api.herokuapp.com/checks`, {
      method: 'DELETE',
      headers: {
        Authorization: apiKey
      }
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  getChecks = () => {
    fetch(`https://check-api.herokuapp.com/checks/1e6df0a0-50b7-46a0-968a-961bab96a0ae`, {
      headers: {
        Authorization: apiKey
      }
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error));
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
