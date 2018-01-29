import React, { Component } from 'react';
import './ClosedChecksContainer.css';
import { fetchItems, fetchTables, putItemToCheck, fetchCheckById, putCheckItemVoid, putCheckClose } from '../../actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClosedCheck from '../ClosedCheck/ClosedCheck.jsx';

class ClosedChecksContainer extends Component {
  render() {
    return (
      <section id='closedchecks-container'>
        ya ya ya
      </section>
    );
  }
}

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ClosedChecksContainer);
