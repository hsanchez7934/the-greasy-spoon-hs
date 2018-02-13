import React, { Component } from 'react';
import './TableCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class TableCard extends Component {

  returnButton2 = (id) => {
    let check;
    for (let i = 0; i < this.props.openChecks.length; i++) {
      check = this.props.openChecks[i];
      if (check.tableId === id) {
        return <p className='open-check-warning'>CHECK OPENED</p>;
      }
    }
    return <Link to='/currentcheck' className='open-check-button-link-tag'>
      <button
        onClick={() => this.props.postCheck(id)}
        className='open-check-button'>
        Open Check
      </button>
    </Link>;
  }

  render() {
    console.log(this.props);
    const { table } = this.props;


    return (
      <article className='table-card' id={table.id}>
        <div className='table-card-top'>
          <h3 className='table-card-table-number'>Table {table.number}</h3>
        </div>
        <div className='table-card-bottom'>
          {
            this.returnButton2(table.id)
          }
        </div>
      </article>
    );
  }
}

TableCard.propTypes = {
  table: PropTypes.object,
  postCheck: PropTypes.func,
  openChecks: PropTypes.array
};
