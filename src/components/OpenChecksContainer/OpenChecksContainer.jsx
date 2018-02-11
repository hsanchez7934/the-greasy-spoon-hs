import React, { Component } from 'react';
import './OpenChecksContainer.css';
import { fetchTables, fetchCheckById, fetchChecks } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

class OpenChecksContainer extends Component {

  componentDidMount() {
    this.props.fetchTables();
    this.props.fetchChecks();
  }

  findTable = (tableID) => {
    if (this.props.tables.length) {
      const table = this.props.tables.filter( table =>
        table.id === tableID);
      return table[0];
    }
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
            <p className='open-check-date'>
              {this.formatDate(check.dateCreated)}
            </p>
            <h1 className='open-check-table-number'>
              Table {this.findTable(check.tableId).number}
            </h1>
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

OpenChecksContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(OpenChecksContainer);
