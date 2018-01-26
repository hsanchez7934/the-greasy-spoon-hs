import React, { Component } from 'react';
import './TablesContainer.css';
import { fetchTables, postCheck, fetchCheckById } from '../../actions';
import { connect } from 'react-redux';
import { BroswerRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TableCard from '../TableCard/TableCard.jsx';

class TablesContainer extends Component {

  componentDidMount() {
    this.props.fetchTables();
  }

  createTableCards = () => (
    this.props.tables.map( (table, index) =>
      <TableCard
        table={table}
        key={index}
        postCheck={this.props.postCheck} />
    )
  )

  render() {
    return (
      <section id='tables-container'>
        {this.createTableCards()}
      </section>
    );
  }
}

TablesContainer.propTypes = {
  fetchTables: PropTypes.func,
  postCheck: PropTypes.func,
  tables: PropTypes.array
};

const mapStateToProps = store => ({
  tables: store.tables
});

const mapDispatchToProps = dispatch => ({
  fetchTables: () => dispatch(fetchTables()),
  postCheck: (id) => dispatch(postCheck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
