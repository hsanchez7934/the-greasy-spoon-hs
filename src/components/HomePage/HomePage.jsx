import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <section id='homepage-container'>
    <section id='homepage-information-container'>
      <h1 id='homepage-title'>The Greasy Spoon</h1>
      <h2 id='homepage-welcome'>Welcome</h2>
      <p id='homepage-text'>
        We will be placing orders for our valued
        customers using this application. The
        sidebar located on the left will help
        you to easily navigate the app.  The
        Tables link will show you which tables
        are are available to open a check against.
        Click on the Open Checks and Closed Checks
        links to view open and closed checks.
        Happy serving!
      </p>
      <div id='get-started-button-container'>
        <Link to='/tables' id='get-started-button-link-tag'>
          <button id='get-started-button'>GET STARTED</button>
        </Link>
      </div>
    </section>
  </section>
);

export default HomePage;
