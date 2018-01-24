import React, { Component } from 'react';
import './SideBar.css';
import { BroswerRouter as Router, Route, Link } from 'react-router-dom';

const routes = [
  {
    path: '/tables',
    exact: true,
    sidebar: () => <li>Tables</li>,
    main: () => <div></div>,

  }
];

const SideBar = () => (
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
);

export default SideBar;
