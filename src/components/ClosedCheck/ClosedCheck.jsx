import React, { Component } from 'react';
import './ClosedCheck.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default class ClosedCheck extends Component {

  filterItem = (id) => {
    const filteredItem = this.props.items.filter( item => item.id === id);
    return filteredItem[0];
  };

  voidedClassName = (item) => {
    return item.voided === true
      ? 'items-list-styles red'
      : 'items-list-styles';
  }

  itemsTotal = () => {
    if (this.props.storedCheck.orderedItems) {
      let filtered;
      return this.props.storedCheck.orderedItems.reduce((acc, item) => {
        filtered = this.filterItem(item.itemId);
        if (item.voided === false) {
          acc += filtered.price;
        } else if (item.voided === true) {
          filtered.price - acc;
        }
        return acc;
      }, 0);
    }
    return 0;
  }

  disableVoidButton = (item) => {
    if (item.voided === true) {
      return (
        <p>Voided</p>
      );
    }
    return (
      <p>Good</p>
    );
  }

  finalTotal = () => {
    const { closedCheck } = this.props;
    let subTotal = parseInt(this.itemsTotal().toFixed(2));
    return subTotal + parseInt(closedCheck.tip.toFixed(2)) + parseInt(closedCheck.tax.toFixed(2));

  };

  render () {
    const { storedCheck, closedCheck, table } = this.props;
    return (
      <article className='closedcheck-card' id={closedCheck.id}>
        <h3 className='title-table'>Table {table.number}</h3>
        <h2 className='open-check-title'>Closed Check</h2>
        <div className='items-container'>
          <section className='ordered-items'>
            <p className='oitems-title'>Ordered Items</p>
            <ul className='items-ul added-items'>
              {
                closedCheck.orderedItems.map( (item, index) =>
                  <li key={index} className={this.voidedClassName(item)}>
                    {this.filterItem(item.itemId).name}
                    <span className='ls-span'>
                      ${this.filterItem(item.itemId).price.toFixed(2)}
                    </span>
                    {
                      this.disableVoidButton(item)
                    }
                  </li>
                )
              }
            </ul>
            <p>Tax: {storedCheck.tax}</p>
            <p>Tip: {storedCheck.tip}</p>
            <p className='customer-total'>
              Total: $
              {
                this.itemsTotal().toFixed(2)
              }
            </p>
          </section>
          <p>{this.finalTotal()}</p>
        </div>
        <div className='close-check-button-container'>
          <Link to='/tables'>
            <button
              className='exit-button'
              onClick={() => this.props.newCheckAdded(true)}>
              EXIT
            </button>
          </Link>
        </div>
      </article>
    );
  }
}
