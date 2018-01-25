import React, { Component } from 'react';
import './HomeScreen.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import SideBar from '../SideBar/SideBar.jsx';
import TablesContainer from '../TablesContainer/TablesContainer.jsx';
import OpenCheck from '../OpenCheck/OpenCheck.jsx';

const routes = [
  {
    path: '/tables',
    exact: true,
    sidebar: () => <li>Tables</li>,
    main: () => <TablesContainer />
  },
  {
    path: '/checks',
    sidebar: () => <li>Tables</li>,
    main: () => <div>Checks</div>
  },
  {
    path: '/opencheck',
    main: () => <OpenCheck />
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
            <li><Link to='/checks'>Checks</Link></li>
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
