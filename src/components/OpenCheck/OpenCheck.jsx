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
      orderedItems: []
    };
    // this.renderListItems = this.renderListItems.bind(this);
  }

  // renderListItems = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       orderedItems: this.props.storedCheck.orderedItems
  //     });
  //   }, 5000);
  // };

  findName = (id) => {
    let name;
    const filteredItem = this.props.items.filter( item => item.id === id);
    name = filteredItem[0].name;
    return name;
  };

  render() {

    const { table, check, items, putItemToCheck, storedCheck } = this.props;

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
              <ul className='items-ul'>
                {
                  this.state.orderedItems.map( (item, index) =>
                    <li key={index} className='items-list-styles'>
                      {this.findName(item.itemId)}
                      <span className='ls-span'>
                        {item.price}
                      </span>
                      <button className='list-buttons'>VOID ITEM</button>
                    </li>
                  )
                }
              </ul>
            </section>

            <section className='items-list'>
              <p className='oitems-title'>Menu Items</p>
              <ul className='items-ul'>
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
                        onClick={() => {
                          this.props.putItemToCheck(check.id, item.id);
                          this.props.fetchCheckById(check.id);
                          // this.renderListItems();
                        }
                      }>
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
