import React, { Component } from 'react';
import './OpenCheck.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class OpenCheck extends Component {

  constructor() {
    super();
    this.state = {
      orderedItems: []
    };
  }

  componentDidMount() {
    if (this.props.storedCheck.orderedItems !== undefined) {
      setTimeout(() => {
        this.setState({
          orderedItems: this.props.storedCheck.orderedItems
        });
      }, 400);
    }
  }

  voidButtonOnClick = (id, itemID) => {
    this.props.putCheckItemVoid(id, itemID);
    setTimeout(() => {
      this.setState({
        orderedItems: this.props.storedCheck.orderedItems
      });
    }, 400);
  }

  addButtonOnClick = (id, itemID) => {
    this.props.putItemToCheck(id, itemID);
    setTimeout(() => {
      this.setState({
        orderedItems: this.props.storedCheck.orderedItems
      });
    }, 400);
  }

  disableVoidButton = (item) => {
    const { storedCheck } = this.props;
    if (item.voided === true) {
      return (
        <button
          className='list-buttons'
          disabled>
          VOIDED
        </button>
      );
    }
    return (
      <button
        className='list-buttons'
        onClick={() => this.voidButtonOnClick(storedCheck.id, item.id, item)}>
        VOID ITEM
      </button>
    );
  }

  voidedClassName = (item) => {
    return item.voided === true
      ? 'items-list-styles red'
      : 'items-list-styles';
  }

  filterItem = (id) => {
    const filteredItem = this.props.items.filter( item => item.id === id);
    return filteredItem[0];
  }

  createOrderedItems = () => {
    return this.state.orderedItems.map( (item, index) =>
      <li key={index} className={this.voidedClassName(item)}>
        {this.filterItem(item.itemId).name}
        <span className='ls-span'>
          ${this.filterItem(item.itemId).price.toFixed(2)}
        </span>
        {
          this.disableVoidButton(item)
        }
      </li>
    );
  }

  createMenuItems = () => {
    const { storedCheck, items } = this.props;
    return items.map( (item, index) =>
      <li
        key={index}
        className='items-list-styles'
        id={item.id}>
        {item.name}
        <span className='ls-span'>
          ${item.price.toFixed(2)}
        </span>
        <button
          className='list-buttons'
          onClick={() => this.addButtonOnClick(storedCheck.id, item.id, item)}>
          ADD ITEM
        </button>
      </li>
    );
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

  closeCheckButtonOnClick = (id) => {
    this.props.putCheckClose(id);
    this.props.newCheckAdded(false);
  }

  render() {
    const { table, storedCheck, items } = this.props;
    if (!table || !storedCheck || !items) {
      return (
        <div>
          SELECT A TABLE TO OPEN A CHECK
        </div>
      );
    } else {
      return (
        <article className='opencheck-card' id={storedCheck.id}>
          <h3 className='title-table'>Table {table.number}</h3>
          <h2 className='open-check-title'>Open Check</h2>
          <div className='items-container'>

            <section className='ordered-items'>
              <p className='oitems-title'>Ordered Items</p>
              <ul className='items-ul added-items'>
                {
                  this.createOrderedItems()
                }
              </ul>
              <p className='customer-total'>
                Total: $
                {
                  this.itemsTotal().toFixed(2)
                }
              </p>
            </section>

            <section className='items-list'>
              <p className='oitems-title'>Menu Items</p>
              <ul className='items-ul menu-items'>
                {
                  this.createMenuItems()
                }
              </ul>
            </section>

          </div>
          <div className='close-check-button-container'>
            <Link to='/openchecks' className='save-button-link'>
              <button className='save-check-button'>
                SAVE CHECK
              </button>
            </Link>
            <button
              className='close-check-button'
              onClick={() => this.closeCheckButtonOnClick(storedCheck.id)}>
              CLOSE CHECK
            </button>
          </div>
        </article>
      );
    }
  }
}

OpenCheck.propTypes ={
  table: PropTypes.object,
  check: PropTypes.object,
  items: PropTypes.array,
  putItemToCheck: PropTypes.func,
  storedCheck: PropTypes.object,
  fetchCheckById: PropTypes.func,
  putCheckItemVoid: PropTypes.func,
  putCheckClose: PropTypes.func,
  newCheckAdded: PropTypes.func
};
