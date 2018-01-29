import React, { Component } from 'react';
import './ClosedChecksContainer.css';
import { fetchItems, fetchTables, putItemToCheck, fetchCheckById, putCheckItemVoid, putCheckClose, fetchChecks } from '../../actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClosedCheck from '../ClosedCheck/ClosedCheck.jsx';
import moment from 'moment';

class ClosedChecksContainer extends Component {

  componentDidMount() {
    this.props.fetchChecks();
    this.props.fetchTables();
  }

  findTable = (tableID) => {
    const table = this.props.tables.filter( table =>
      table.id === tableID);
      return table[0];
  }

  formatDate = (date) => {
    const newDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    return newDate;
  }

  createClosedTablesCard = () => {
    return this.props.checks.map( (check, index) => {
      if (check.closed === true ) {
        return <article key={index} id={check.id} className='closed-checks'>
          <div className='closed-check-top'>
            <p className='closed-check-date'>{this.formatDate(check.dateCreated)}</p>
            <h1 className='closed-check-table-number'>Table {this.findTable(check.tableId).number}</h1>
          </div>
          <div className='closed-check-bottom'>
            <Link to='/currentcheck' className='see-details-button-link-tag'>
              <button
                onClick={() => this.props.fetchCheckById(check.id)}
                className='see-details-button'>
                See Details
              </button>
            </Link>
          </div>
        </article>;
      }
    });
  }

  queryForClosedChecks = () => {
    return this.props.checks.filter( check => check.closed === true);
  }

  render() {
    console.log(this.props.checks);
    if (this.queryForClosedChecks().length === 0) {
      return (
        <section id='closedchecks-container'>
          <p className='no-closed-checks-warning'>NO CLOSED CHECKS</p>
        </section>
      );
    } else {
      return (
        <section id='closedchecks-container'>
          {
            this.createClosedTablesCard()
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

export default connect(mapStateToProps, mapDispatchToProps)(ClosedChecksContainer);
