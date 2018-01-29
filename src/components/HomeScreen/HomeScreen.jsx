import React, { Component } from 'react';
import './HomeScreen.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TablesContainer from '../TablesContainer/TablesContainer.jsx';
import CurrentCheckContainer from '../CurrentCheckContainer/CurrentCheckContainer.jsx';
import OpenChecksContainer from '../OpenChecksContainer/OpenChecksContainer.jsx';
import ClosedChecksContainer from '../ClosedChecksContainer/ClosedChecksContainer.jsx';
import HomePage from '../HomePage/HomePage.jsx';
import menu from '../../assets/menu.svg';
import menuHover from '../../assets/menu-hover.svg';
import cancel from '../../assets/cancel.svg';
import cancelHover from '../../assets/cancel-hover.svg';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      icon: menu,
      cancel: cancel,
      active: 'drop-down-menu'
    };
  }

  changeIcon = (query, icon) => {
    this.setState({
      [query]: icon
    });
  }

  render() {
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
    return (
      <Router>

        <section id='homescreen-container'>
          <nav>
            <section id='nav-left'>
              <img
                src={this.state.icon}
                alt='Mobile menu icon.'
                className='mobile-menu-icon'
                onMouseEnter={() => this.changeIcon('icon', menuHover)}
                onMouseLeave={() => this.changeIcon('icon', menu)}
                onClick={() => this.setState({active: 'drop-down-menu active'})}/>
            </section>
            <section id='nav-right'>
              <h6 id='mobile-title'>The Greasy Spoon</h6>
            </section>
          </nav>

          <div className={this.state.active}>
            <div id='cancel-icon-container'>
              <img
                id='cancel-icon'
                src={this.state.cancel}
                alt='Mobile menu icon.'
                className='mobile-menu-icon'
                onMouseEnter={() => this.changeIcon('cancel', cancelHover)}
                onMouseLeave={() => this.changeIcon('cancel', cancel)}
                onClick={() => this.setState({active: 'drop-down-menu'})} />
            </div>
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
          </div>

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
  }
}
