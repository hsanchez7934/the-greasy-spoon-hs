import React, { Component } from 'react';
import './CurrentCheckContainer.css';
import {
  fetchItems,
  putItemToCheck,
  fetchCheckById,
  putCheckItemVoid,
  putCheckClose
} from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OpenCheck from '../OpenCheck/OpenCheck.jsx';
import ClosedCheck from '../ClosedCheck/ClosedCheck.jsx';
import { findTable } from '../../helperFunctions';

class CurrentCheckContainer extends Component {

  constructor() {
    super();
    this.state = {
      newCheck: true
    };
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.storedCheck.closed === true) {
      this.setState({
        newCheck: false
      });
    }
  }

  newCheckAdded = (query) => {
    this.setState({
      newCheck: query
    });
  }

  createOpenCheckCard = () => {
    const { storedCheck, tables, items } = this.props;
    return <OpenCheck
      tables={tables}
      items={items}
      putItemToCheck={this.props.putItemToCheck}
      storedCheck={storedCheck}
      putCheckItemVoid={this.props.putCheckItemVoid}
      putCheckClose={this.props.putCheckClose}
      newCheckAdded={this.newCheckAdded} />;
  }

  createClosedCheckCard = () => {
    const { storedCheck, tables, items } = this.props;
    return <ClosedCheck
      storedCheck={this.props.storedCheck}
      items={this.props.items}
      tables={tables}
      newCheckAdded={this.newCheckAdded} />;
  }

  render() {

    const { storedCheck } = this.props;
    const { newCheck } = this.state;

    if (storedCheck.closed === true && newCheck === false) {
      return (
        <section id='currentcheck-container'>
          {
            this.createClosedCheckCard()
          }
        </section>
      );
    } else if (this.props.tables.length !== 0 && storedCheck !== undefined) {
      return (
        <section id='currentcheck-container'>
          {
            this.createOpenCheckCard()
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


CurrentCheckContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCheckContainer);
