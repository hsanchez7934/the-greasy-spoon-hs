import React, { Component } from 'react';
import './HomeScreen.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TablesContainer from '../TablesContainer/TablesContainer.jsx';
import CurrentCheckContainer from '../CurrentCheckContainer/CurrentCheckContainer.jsx';
import OpenChecksContainer from '../OpenChecksContainer/OpenChecksContainer.jsx';
import ClosedChecksContainer from '../ClosedChecksContainer/ClosedChecksContainer.jsx';

const routes = [
  {
    path: '/tables',
    exact: true,
    main: () => <TablesContainer />
  },
  {
    path: '/currentcheck',
    main: () => <CurrentCheckContainer />
  },
  {
    path: '/openchecks',
    main: () => <OpenChecksContainer />
  },
  {
    path: '/closedchecks',
    main: () => <ClosedChecksContainer />
  }
];

const HomeScreen = () => (
  <Router>

    <section id='homescreen-container'>

      <aside id='sidebar-container'>
        <section id='restaurant-title'>
          <h1>The Greasy Spoon</h1>
        </section>
        <section id='links-container'>
          <ul>
            <li><Link to='/tables'>Tables</Link></li>
            <li><Link to='/openchecks'>Open Checks</Link></li>
            <li><Link to='/closedchecks'>Closed Checks</Link></li>
          </ul>
        </section>
      </aside>

      <div id='container2'>
        {
          routes.map( (route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main} />
          ))
        }
      </div>
    </section>

  </Router>

);

export default HomeScreen;
