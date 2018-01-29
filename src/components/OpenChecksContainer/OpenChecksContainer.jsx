import React, { Component } from 'react';
import './OpenChecksContainer.css';
import { fetchItems, fetchTables, putItemToCheck, fetchCheckById, putCheckItemVoid, putCheckClose, fetchChecks } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OpenCheck from '../OpenCheck/OpenCheck.jsx';

class OpenChecksContainer extends Component {

  componentDidMount() {
    this.props.fetchChecks();
    this.props.fetchTables();
  }

  findTable = (tableID) => {
    const table = this.props.tables.filter( table =>
      table.id === tableID);
      return table[0];
  }

  createOpenTablesCard = () => {
    return this.props.checks.map( (check, index) => {
      if (check.closed === false ) {
        return <article key={index} id={check.id}>
          <h1>Table {this.findTable(check.tableId).number}</h1>
          <Link to='/currentcheck'>
            <button
              onClick={() => this.props.fetchCheckById(check.id)}>
              See Details
            </button>
          </Link>
        </article>;
      }
    });
  }

  queryForOpenChecks = () => {
    return this.props.checks.filter( check => check.closed === false);
  }

  render() {
    console.log(this.props.checks);
    if (this.queryForOpenChecks().length === 0) {
      return (
        <section id='openchecks-container'>
          NO OPEN CHECKS
        </section>
      );
    } else {
      return (
        <section id='openchecks-container'>
          {
            this.createOpenTablesCard()
          }
        </section>
      );
    }
  }
}

const mapStateToProps = store => ({
  checks: store.checks,
  tables: store.tables
});

const mapDispatchToProps = dispatch => ({
  fetchChecks: () => dispatch(fetchChecks()),
  fetchTables: () => dispatch(fetchTables()),
  fetchCheckById: (id) => dispatch(fetchCheckById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenChecksContainer);
