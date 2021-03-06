import React, { Component } from 'react';
import './TablesContainer.css';
import {
  fetchTables,
  postCheck,
  fetchChecks,
  deleteAllChecks
} from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableCard from '../TableCard/TableCard.jsx';
import loadingIcon from '../../assets/loading-icon.svg';

class TablesContainer extends Component {

  constructor() {
    super();
    this.state = {
      openChecks: []
    };
  }

  componentDidMount() {
    this.props.fetchTables();
    this.props.fetchChecks();
    this.filterOpenChecks();
  }

  filterOpenChecks = () => {
    setTimeout(() => {
      const openChecks = this.props.checks.filter( check =>
        check.closed === false);
      this.setState({
        openChecks
      });
    }, 500);
  }

  createTableCards = () => (
    this.props.tables.map( (table, index) =>
      <TableCard
        table={table}
        key={index}
        postCheck={this.props.postCheck}
        TableCardClassName={this.TableCardClassName}
        openChecks={this.state.openChecks} />
    )
  )

  render() {
    if (this.props.tables.length !==0 && this.props.checks.length !== 0) {
      return (
        <section id='tables-container'>
          {this.createTableCards()}
        </section>
      );
    } else {
      return (
        <section id='tables-container'>
          <img
            src={loadingIcon}
            className='loading-icon'>
          </img>
        </section>
      );
    }

  }
}

TablesContainer.propTypes = {
  fetchTables: PropTypes.func,
  postCheck: PropTypes.func,
  tables: PropTypes.array,
  fetchChecks: PropTypes.func,
  checks: PropTypes.array
};

const mapStateToProps = store => ({
  tables: store.tables,
  checks: store.checks
});

const mapDispatchToProps = dispatch => ({
  fetchTables: () => dispatch(fetchTables()),
  postCheck: (id) => dispatch(postCheck(id)),
  fetchChecks: () => dispatch(fetchChecks()),
  deleteAllChecks: () => dispatch(deleteAllChecks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
