import React, { Component } from 'react';
import './HomeScreen.css';
import { BroswerRouter as Router, Route, Link } from 'react-router-dom';
// import SideBar from '../SideBar/SideBar.jsx';
import TablesContainer from '../TablesContainer/TablesContainer.jsx';

const routes = [
  {
    path: '/tables',
    exact: true,
    sidebar: () => <li>Tables</li>,
    main: () => <div></div>,

  }
];

const HomeScreen = () => (
  <section id='homescreen-container'>
    <aside id='sidebar-container'>
      <section id='restaurant-title'>
        <h1>The Greasy Spoon</h1>
      </section>
      <section id='links-container'>
        <ul>
          <li>Tables</li>
          <li>Checks</li>
        </ul>
      </section>
    </aside>

    <TablesContainer />
  </section>
);

export default HomeScreen;
