import apiKey from '../apikey.js';

export const getTables = tablesArray => ({
  type: 'GET_TABLES',
  tablesArray
});

export const addCheck = check => ({
  type: 'ADD_CHECK',
  check
});

export const getItems = itemsArray => ({
  type: 'GET_ITEMS',
  itemsArray
});

export const checkById = check => ({
  type: 'GET_CHECK_BY_ID',
  check
});

export const addItemToCheck = item => ({
  type: 'PUT_ITEM',
  item
});

export const putItemToCheck = (id, itemID) => dispatch => {

  const newItem = {itemId: itemID};

  fetch(`https://check-api.herokuapp.com/checks/${id}/addItem`, {
    method: 'PUT',
    headers: {
      Authorization: apiKey
    },
    accept: 'application/json',
    body: JSON.stringify(newItem)
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

export const fetchCheckById = (id) => dispatch => {

  fetch(`https://check-api.herokuapp.com/checks/${id}`, {
    headers: {
      Authorization: apiKey
    }
  })
    .then(response => response.json())
    .then(response => dispatch(checkById(response)))
    .catch(error => console.log(error));
};

export const postCheck = (id) => dispatch => {

  const newCheck = {tableId: id};

  fetch(`https://check-api.herokuapp.com/checks`, {
    method: 'POST',
    headers: {
      Authorization: apiKey
    },
    accept: 'application/json',
    body: JSON.stringify(newCheck)
  })
    .then(response => response.json())
    .then(response => dispatch(addCheck(response)))
    .catch(error => console.log(error));
};

export const fetchTables = () => dispatch => {
  fetch(`https://check-api.herokuapp.com/tables`, {
    headers: {
      Authorization: apiKey
    }
  })
    .then(response => response.json())
    .then(response => dispatch(getTables(response)))
    .catch(error => console.log(error));
};

export const fetchItems = () => dispatch => {
  fetch(`https://check-api.herokuapp.com/items`, {
    headers: {
      Authorization: apiKey
    }
  })
    .then(response => response.json())
    .then(response => dispatch(getItems(response)))
    .catch(error => console.log(error));
};

export const fetchChecks = () => dispatch => {
  fetch(`https://check-api.herokuapp.com/checks`, {
    headers: {
      Authorization: apiKey
    }
  })
    .then(response => response.json())
    .then(response => dispatch(getTables(response)))
    .catch(error => console.log(error));
};
