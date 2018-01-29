import React, { Component } from 'react';
import './OpenChecksContainer.css';
import { fetchItems, fetchTables, putItemToCheck, fetchCheckById, putCheckItemVoid, putCheckClose, fetchChecks } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OpenCheck from '../OpenCheck/OpenCheck.jsx';
import moment from 'moment';

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

  formatDate = (date) => {
    const newDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    return newDate;
  }

  createOpenTablesCard = () => {
    return this.props.checks.map( (check, index) => {
      if (check.closed === false ) {
        return <article key={index} id={check.id} className='open-checks'>
          <div className='open-check-top'>
            <p className='open-check-date'>{this.formatDate(check.dateCreated)}</p>
            <h1 className='open-check-table-number'>Table {this.findTable(check.tableId).number}</h1>
          </div>
          <div className='open-check-bottom'>
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

  queryForOpenChecks = () => {
    return this.props.checks.filter( check => check.closed === false);
  }

  render() {
    console.log(this.props.checks);
    if (this.queryForOpenChecks().length === 0) {
      return (
        <section id='openchecks-container'>
          <p className='no-open-checks-warning'>NO OPEN CHECKS</p>
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
