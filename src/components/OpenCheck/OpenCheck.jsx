import React, { Component } from 'react';
import './OpenCheck.css';
// import { fetchItems } from '../../actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class OpenCheck extends Component {

  constructor() {
    super();
    this.state = {
      orderedItem: [],
      orderedItems: [],
      voidedItems: []
    };
  }

  voidedButtonOnClick = (id, itemID, item) => {
    let array = [];
    putCheckItemVoid(id, itemID);
    array.push(item)
  }

  addButtonOnClick = (id, itemID, item) => {
    let array = [];
    this.props.putItemToCheck(id, itemID);
    this.props.fetchCheckById(id);
    array.push(item);
    this.setState({
      orderedItem: array
    });
    setTimeout(() => {
      this.setState({
        orderedItems: this.props.storedCheck.orderedItems
      });
    }, 2500);
  }

  findName = (id) => {
    let item;
    const filteredItem = this.props.items.filter( item => item.id === id);
    item = filteredItem[0];
    return item;
  };

  render() {

    const { table, check, items, putItemToCheck, storedCheck, putCheckItemVoid } = this.props;

    if (!table || !check || !items) {
      return (
        <div>Not Loaded Yet</div>
      );
    } else {
      return (
        <article className='opencheck-card' id={check.id}>
          <h3 className='title-table'>Table {table.number}</h3>
          <h2 className='open-check-title'>Open Check</h2>
          <div className='items-container'>

            <section className='ordered-items'>
              <p className='oitems-title'>Ordered Items</p>
              <ul className='items-ul added-item'>
                {
                  this.state.orderedItem.map( (item, index) =>
                    <li
                      key={index}
                      className='items-list-styles last-item-added'>
                      Added: {item.name}
                      <span className='ls-span'>
                        {item.price}
                      </span>
                    </li>
                  )
                }
              </ul>
              <ul className='items-ul added-items'>
                {
                  this.state.orderedItems.map( (item, index) =>
                    <li key={index} className='items-list-styles'>
                      {this.findName(item.itemId).name}
                      <span className='ls-span'>
                        {this.findName(item.itemId).price}
                      </span>
                      <button
                        className='list-buttons'
                        onClick={() => this.voidedButtonOnClick(check.id, item.id, item)}>
                        VOID ITEM
                      </button>
                    </li>
                  )
                }
              </ul>
            </section>

            <section className='items-list'>
              <p className='oitems-title'>Menu Items</p>
              <ul className='items-ul menu-items'>
                {
                  items.map( (item, index) =>
                    <li
                      key={index}
                      className='items-list-styles'
                      id={item.id}>
                      {item.name}
                      <span className='ls-span'>
                        {item.price}
                      </span>
                      <button
                        className='list-buttons'
                        onClick={() => this.addButtonOnClick(check.id, item.id, item)}>
                        ADD ITEM
                      </button>
                    </li>
                  )
                }
              </ul>
            </section>

          </div>

        </article>
      );
    }
  }
}

OpenCheck.propTypes ={

};
