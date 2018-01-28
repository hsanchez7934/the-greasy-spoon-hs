import React, { Component } from 'react';
import './OpenCheckContainer.css';
import { fetchItems, fetchTables, putItemToCheck, fetchCheckById, putCheckItemVoid, putCheckClose } from '../../actions';
import { connect } from 'react-redux';
import { BroswerRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OpenCheck from '../OpenCheck/OpenCheck.jsx';
import ClosedCheck from '../ClosedCheck/ClosedCheck.jsx';

class OpenCheckContainer extends Component {

  constructor() {
    super();
    this.state = {
      newCheck: true
    };
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  newCheckAdded = (query) => {
    this.setState({
      newCheck: query
    });
  }

  findTable = () => {
    return this.props.tables.filter( table =>
      table.id === this.props.addedCheck.tableId);
  }

  createOpenCheckCard = () => {
    const table = this.findTable();
    return <OpenCheck
      check={this.props.addedCheck}
      table={table[0]}
      items={this.props.items}
      putItemToCheck={this.props.putItemToCheck}
      storedCheck={this.props.storedCheck}
      putCheckItemVoid={this.props.putCheckItemVoid}
      putCheckClose={this.props.putCheckClose}
      newCheckAdded={this.newCheckAdded} />;
  }

  createClosedCheckCard = () => {
    const table = this.findTable();
    return <ClosedCheck
      storedCheck={this.props.storedCheck}
      items={this.props.items}
      table={table[0]}
      closedCheck={this.props.closedCheck}
      newCheckAdded={this.newCheckAdded} />;
  }

  render() {
    const { storedCheck } = this.props;
    const { newCheck } = this.state;

    if (storedCheck.closed === true && newCheck === false) {
      return (
        <section id='opencheck-container'>
          {
            this.createClosedCheckCard()
          }
        </section>
      );
    } else {
      return (
        <section id='opencheck-container'>
          {
            this.createOpenCheckCard()
          }
        </section>
      );
    }
  }
}


OpenCheckContainer.propTypes = {
  fetchItems: PropTypes.func,
  addedCheck: PropTypes.object,
  tables: PropTypes.array,
  items: PropTypes.array,
  putItemToCheck: PropTypes.func,
  storedCheck: PropTypes.object,
  fetchCheckById: PropTypes.func,
  putCheckItemVoid: PropTypes.func,
  putCheckClose: PropTypes.func,
  closedCheck: PropTypes.object
};

const mapStateToProps = store => ({
  items: store.items,
  addedCheck: store.addedCheckReducer,
  tables: store.tables,
  storedCheck: store.checkByIdReducer,
  closedCheck: store.closedCheckReducer
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  putItemToCheck: (id, itemID) => dispatch(putItemToCheck(id, itemID)),
  fetchCheckById: (id) => dispatch(fetchCheckById(id)),
  putCheckItemVoid: (id, itemID) => dispatch(putCheckItemVoid(id, itemID)),
  putCheckClose: (id) => dispatch(putCheckClose(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenCheckContainer);
