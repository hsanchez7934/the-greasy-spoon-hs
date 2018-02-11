import React, { Component } from 'react';
import './ClosedCheck.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ClosedCheck extends Component {

  filterItem = (id) => {
    const filteredItem = this.props.items.filter( item => item.id === id);
    console.log(filteredItem);
    return filteredItem[0];
  };

  voidedClassName = (item) => {
    return item.voided === true
      ? 'closed-items-list-styles red'
      : 'closed-items-list-styles';
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

  returnVoidedIndicator = (item) => {
    if (item.voided === true) {
      return (
        <p className='closed-voided-item'>Voided</p>
      );
    }
  }

  finalTotal = () => {
    let subTotal;
    const { storedCheck } = this.props;
    subTotal = parseInt(this.itemsTotal().toFixed(2));
    subTotal = subTotal + parseInt(storedCheck.tip.toFixed(2));
    subTotal = subTotal + parseInt(storedCheck.tax.toFixed(2));
    return subTotal;
  };

  createOrderedItems = () => (
    this.props.storedCheck.orderedItems.map( (item, index) =>
      <li key={index} className={this.voidedClassName(item)}>
        {this.filterItem(item.itemId).name}
        <span className='ls-span'>
          ${this.filterItem(item.itemId).price.toFixed(2)}
        </span>
        {
          this.returnVoidedIndicator(item)
        }
      </li>
    )
  );

  render () {
    const { storedCheck, table } = this.props;
    return (
      <article className='closedcheck-card' id={storedCheck.id}>
        <h3 className='closed-title-table'>Table {table.number}</h3>
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
            this.itemsTotal().toFixed(2)
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
              onClick={() => this.props.newCheckAdded(true)}>
              EXIT
            </button>
          </Link>
        </div>
      </article>
    );
  }
}

ClosedCheck.propTypes = {
  newCheckAdded: PropTypes.func,
  storedCheck: PropTypes.object,
  table: PropTypes.object,
  items: PropTypes.array
};
