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
