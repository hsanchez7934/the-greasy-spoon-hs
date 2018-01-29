import React, { Component } from 'react';
import './HomeScreen.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TablesContainer from '../TablesContainer/TablesContainer.jsx';
import CurrentCheckContainer from '../CurrentCheckContainer/CurrentCheckContainer.jsx';
import OpenChecksContainer from '../OpenChecksContainer/OpenChecksContainer.jsx';
import ClosedChecksContainer from '../ClosedChecksContainer/ClosedChecksContainer.jsx';
import HomePage from '../HomePage/HomePage.jsx';

const routes = [
  { path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/tables',
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
          <h1 id='greasy-spoon-text'>The Greasy Spoon</h1>
        </section>
        <section id='links-container'>
          <ul id='nav-links-ul'>
            <li className='nav-links-li'>
              <Link
                to='/'
                className='nav-links-link-tag'>Home</Link>
            </li>
            <li className='nav-links-li'>
              <Link
                to='/tables'
                className='nav-links-link-tag'>Tables</Link>
            </li>
            <li className='nav-links-li'>
              <Link
                to='/openchecks'
                className='nav-links-link-tag'>Open Checks</Link>
            </li>
            <li className='nav-links-li'>
              <Link
                to='/closedchecks'
                className='nav-links-link-tag'>Closed Checks</Link>
            </li>
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
