import React, { Component } from 'react';
import './TableCard.css';
import { fetchTables } from '../../actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class TableCard extends Component {

  returnButton2 = (id) => {
    let check;
    for (let i = 0; i < this.props.openChecks.length; i++) {
      check = this.props.openChecks[i];
      if (check.tableId === id) {
          return <p>OPEN CHECK</p>
      }
    }
    return <Link to='/currentcheck'>
      <button
        onClick={() => this.props.postCheck(id)}>
        Open Check
      </button>
    </Link>
  }

  render() {
    console.log(this.props.openChecks);
    const { table, postCheck, openChecks } = this.props;
    return (
      <article className='table-card' id={table.id}>
        <h3>Table {table.number}</h3>
        {
          this.returnButton2(table.id)
        }
      </article>
    );
  }
}

TableCard.propTypes = {
  table: PropTypes.object,
  postCheck: PropTypes.func,
  openChecks: PropTypes.array
};
