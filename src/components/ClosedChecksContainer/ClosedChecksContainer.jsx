import React, { Component } from 'react';
import './ClosedChecksContainer.css';
import { fetchTables, fetchCheckById, fetchChecks } from '../../actions';
import {
  findTable,
  formatDate,
  queryForChecks } from '../../helperFunctions.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ClosedChecksContainer extends Component {

  componentDidMount() {
    this.props.fetchTables();
    this.props.fetchChecks();
  }

  createClosedTablesCard = () => {
    return this.props.checks.map( (check, index) => {
      if (check.closed === true ) {
        return <article key={index} id={check.id} className='closed-checks'>
          <div className='closed-check-top'>
            <p className='closed-check-date'>
              {formatDate(check.dateCreated)}
            </p>
            <h1 className='closed-check-table-number'>
              Table {findTable(check.tableId, this.props.tables)}
            </h1>
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

  render() {
    if (queryForChecks(this.props.checks, true).length === 0) {
      return (
        <section id='closedchecks-container'>
          <p className='no-closed-checks-warning'>NO CLOSED CHECKS</p>
        </section>
      );
    } else if (this.props.tables.length !== 0) {
      return (
        <section id='closedchecks-container'>
          {
            this.createClosedTablesCard()
          }
        </section>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

ClosedChecksContainer.propTypes = {
  fetchChecks: PropTypes.func,
  fetchTables: PropTypes.func,
  tables: PropTypes.array,
  checks: PropTypes.array,
  fetchCheckById: PropTypes.func
};

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
