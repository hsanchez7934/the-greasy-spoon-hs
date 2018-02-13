import React, { Component } from 'react';
import './ClosedCheck.css';
import { Link } from 'react-router-dom';
import {
  filterItem,
  voidedClassName,
  itemsTotal,
  findTable } from '../../helperFunctions.js';
import PropTypes from 'prop-types';

export default class ClosedCheck extends Component {

  returnVoidedIndicator = (item) => {
    if (item.voided === true) {
      return (
        <p className='closed-voided-item'>
          Voided
        </p>
      );
    }
  }

  finalTotal = () => {
    let subTotal;
    const { storedCheck } = this.props;
    subTotal = parseInt(itemsTotal(storedCheck.orderedItems, this.props.items).toFixed(2));
    subTotal = subTotal + parseInt(storedCheck.tip.toFixed(2));
    subTotal = subTotal + parseInt(storedCheck.tax.toFixed(2));
    return subTotal;
  };

  createOrderedItems = () => (
    this.props.storedCheck.orderedItems.map( (item, index) =>
      <li key={index} className={voidedClassName(item)}>
        {filterItem(this.props.items, item.itemId).name}
        <span className='ls-span'>
          ${filterItem(this.props.items, item.itemId).price.toFixed(2)}
        </span>
        {
          this.returnVoidedIndicator(item)
        }
      </li>
    )
  );

  render () {
    const { storedCheck, tables, items, newCheckAdded } = this.props;
    if (items.length !== 0 && storedCheck.id !== undefined) {
      return (
        <article className='closedcheck-card' id={storedCheck.id}>
          <h3 className='closed-title-table'>
            Table {findTable(storedCheck.tableId, tables)}
          </h3>
          <h2 className='closed-check-title'>Closed Check</h2>
          <section className='closed-ordered-items'>
            <p className='oitems-title'>Ordered Items</p>
            <ul className='closed-ordered-items-ul'>
              {
                this.createOrderedItems()
              }
            </ul>
          </section>
          <p className='tax-tip'>
            Sub-Total: $
            {
              itemsTotal(storedCheck.orderedItems, items).toFixed(2)
            }
          </p>
          <p className='tax-tip'>
            Tax: {storedCheck.tax}
          </p>
          <p className='tax-tip'>
            Tip: {storedCheck.tip}
          </p>
          <p className='closed-customer-total'>
            Total: ${this.finalTotal().toFixed(2)}
          </p>
          <div className='exit-check-button-container'>
            <Link
              to='/closedchecks'
              className='exit-button-link'>
              <button
                className='exit-button'
                onClick={() => newCheckAdded(true)}>
                EXIT
              </button>
            </Link>
          </div>
        </article>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

ClosedCheck.propTypes = {
  newCheckAdded: PropTypes.func,
  storedCheck: PropTypes.object,
  tables: PropTypes.array,
  items: PropTypes.array
};
