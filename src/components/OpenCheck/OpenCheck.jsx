import React, { Component } from 'react';
import './OpenCheck.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  filterItem,
  voidedClassName,
  itemsTotal,
  findTable } from '../../helperFunctions.js';

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

  createOrderedItems = () => (
    this.state.orderedItems.map( (item, index) =>
      <li key={index} className={voidedClassName(item)}>
        {filterItem(this.props.items, item.itemId).name}
        <span className='ls-span'>
          ${filterItem(this.props.items, item.itemId).price.toFixed(2)}
        </span>
        {
          this.disableVoidButton(item)
        }
      </li>
    )
  );

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

  closeCheckButtonOnClick = (id) => {
    this.props.putCheckClose(id);
    this.props.newCheckAdded(false);
  }

  render() {
    const { tables, storedCheck, items } = this.props;
    if (!tables || !storedCheck || !items) {
      return (
        <div>
          SELECT A TABLE TO OPEN A CHECK
        </div>
      );
    } else if (storedCheck.id !== undefined) {
      return (
        <article className='opencheck-card' id={storedCheck.id}>
          <h3 className='title-table'>
            Table {findTable(storedCheck.tableId, tables)}
          </h3>
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
                  itemsTotal(storedCheck.orderedItems, items).toFixed(2)
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
    } else {
      return (
        <div></div>
      );
    }
  }
}

OpenCheck.propTypes ={
  tables: PropTypes.array,
  check: PropTypes.object,
  items: PropTypes.array,
  putItemToCheck: PropTypes.func,
  storedCheck: PropTypes.object,
  fetchCheckById: PropTypes.func,
  putCheckItemVoid: PropTypes.func,
  putCheckClose: PropTypes.func,
  newCheckAdded: PropTypes.func
};
