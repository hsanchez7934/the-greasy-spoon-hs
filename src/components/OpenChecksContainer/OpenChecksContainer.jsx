import React, { Component } from 'react';
import './OpenChecksContainer.css';
import { fetchTables, fetchCheckById, fetchChecks } from '../../actions';
import {
  findTable,
  formatDate,
  queryForChecks
} from '../../helperFunctions.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class OpenChecksContainer extends Component {

  componentDidMount() {
    this.props.fetchTables();
    this.props.fetchChecks();
  }

  createOpenTablesCard = () => {
    return this.props.checks.map( (check, index) => {
      if (check.closed === false ) {
        return <article key={index} id={check.id} className='open-checks'>
          <div className='open-check-top'>
            <p className='open-check-date'>
              {formatDate(check.dateCreated)}
            </p>
            <h1 className='open-check-table-number'>
              Table {findTable(check.tableId, this.props.tables)}
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

  render() {
    if (queryForChecks(this.props.checks, false).length === 0) {
      return (
        <section id='openchecks-container'>
          <p className='no-open-checks-warning'>NO OPEN CHECKS</p>
        </section>
      );
    } else if (this.props.tables.length !== 0) {
      return (
        <section id='openchecks-container'>
          {
            this.createOpenTablesCard()
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
