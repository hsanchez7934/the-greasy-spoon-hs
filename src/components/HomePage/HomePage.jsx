import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <section id='homepage-container'>
    <h1>The Greasy Spoon</h1>
    <h2>Welcome</h2>
    <p>
      We will be placing orders for our valued customer through here.
      The sidebar located on the left will help you easily
      navigate through the program.  The tables link will show you which tables are
      are available to open a check against.  Click on the OpenChecks and ClosedChecks links
      to view open and closed checks.  Happy serving!
    </p>
    <div id='get-started-button-container'>
      <Link to='/tables'>
        <button>GET STARTED</button>
      </Link>

    </div>
  </section>
);

export default HomePage;
