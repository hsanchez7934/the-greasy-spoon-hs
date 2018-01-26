import React, { Component } from 'react';
import './OpenCheckContainer.css';
import { fetchItems, fetchTables, putItemToCheck, fetchCheckById, putCheckItemVoid } from '../../actions';
import { connect } from 'react-redux';
import { BroswerRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OpenCheck from '../OpenCheck/OpenCheck.jsx';

class OpenCheckContainer extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  createOpenCheckCard = () => {
    const table = this.props.tables.filter( table =>
      table.id === this.props.addedCheck.tableId);
    return <OpenCheck
      check={this.props.addedCheck}
      table={table[0]}
      items={this.props.items}
      putItemToCheck={this.props.putItemToCheck}
      storedCheck={this.props.storedCheck}
      fetchCheckById={this.props.fetchCheckById}
      putCheckItemVoid={this.props.putCheckItemVoid} />;
  }

  render() {
    return (
      <section id='opencheck-container'>
        {
          this.createOpenCheckCard()
        }
      </section>
    );
  }
}

OpenCheckContainer.propTypes = {
  fetchItems: PropTypes.func,
  addedCheck: PropTypes.object,
  tables: PropTypes.array,
  items: PropTypes.array,
  putItemToCheck: PropTypes.func,
  storedCheck: PropTypes.object,
  fetchCheckById: PropTypes.func
};

const mapStateToProps = store => ({
  items: store.items,
  addedCheck: store.addedCheckReducer,
  tables: store.tables,
  storedCheck: store.checkByIdReducer
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  putItemToCheck: (id, itemID) => dispatch(putItemToCheck(id, itemID)),
  fetchCheckById: (id) => dispatch(fetchCheckById(id)),
  putCheckItemVoid: (id, itemID) => dispatch(putCheckItemVoid(id, itemID))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenCheckContainer);
