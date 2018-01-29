import React, { Component } from 'react';
import './App.css';
import apiKey from '../../apikey.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from '../HomeScreen/HomeScreen.jsx';

const App = () => (
  <div className="App">
    <HomeScreen />
  </div>
);

export default App;
