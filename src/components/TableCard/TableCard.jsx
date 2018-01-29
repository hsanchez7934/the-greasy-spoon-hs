import React, { Component } from 'react';
import './TableCard.css';
import { fetchTables } from '../../actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class TableCard extends Component {

  render() {
    const { table, postCheck } = this.props;
    return (
      <article className='table-card' id={table.id}>
        <h3>Table {table.number}</h3>
        <Link to='/currentcheck'>
          <button onClick={() => postCheck(table.id)}>
            Open Check
          </button>
        </Link>
      </article>
    );
  }
}

TableCard.propTypes = {
  table: PropTypes.object,
  postCheck: PropTypes.func
};
