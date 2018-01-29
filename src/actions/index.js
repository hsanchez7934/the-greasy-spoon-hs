import API_KEY from '../.env';

export const getChecks = checksArray => ({
  type: 'GET_CHECKS',
  checksArray
});

export const getTables = tablesArray => ({
  type: 'GET_TABLES',
  tablesArray
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

export const putCheckClose = (id) => dispatch => {
  fetch(`https://check-api.herokuapp.com/checks/${id}/close`, {
    method: 'PUT',
    headers: {
      Authorization: process.env.API_KEY
    },
    accept: 'application/json',
    body: {}
  })
    .then(response => response.json())
    .then(response => response)
    .then(() => dispatch(fetchCheckById(id)))
    .catch(error => error);
};

export const putCheckItemVoid = (id, itemID) => dispatch => {
  const itemToVoid = {orderedItemId: itemID};

  fetch(`https://check-api.herokuapp.com/checks/${id}/voidItem`, {
    method: 'PUT',
    headers: {
      Authorization: process.env.API_KEY
    },
    accept: 'application/json',
    body: JSON.stringify(itemToVoid)
  })
    .then(response => response.json())
    .then(response => response)
    .then(() => dispatch(fetchCheckById(id)))
    .catch(error => error);
};

export const putItemToCheck = (id, itemID) => dispatch => {

  const newItem = {itemId: itemID};

  fetch(`https://check-api.herokuapp.com/checks/${id}/addItem`, {
    method: 'PUT',
    headers: {
      Authorization: process.env.API_KEY
    },
    accept: 'application/json',
    body: JSON.stringify(newItem)
  })
    .then(response => response.json())
    .then(response => response)
    .then(() => dispatch(fetchCheckById(id)))
    .catch(error => error);
};

export const fetchCheckById = (id) => dispatch => {
  fetch(`https://check-api.herokuapp.com/checks/${id}`, {
    headers: {
      Authorization: process.env.API_KEY
    }
  })
    .then(response => response.json())
    .then(response => dispatch(checkById(response)))
    .catch(error => error);
};

export const postCheck = (id) => dispatch => {

  const newCheck = {tableId: id};

  fetch(`https://check-api.herokuapp.com/checks`, {
    method: 'POST',
    headers: {
      Authorization: process.env.API_KEY
    },
    accept: 'application/json',
    body: JSON.stringify(newCheck)
  })
    .then(response => response.json())
    .then(response => dispatch(fetchCheckById(response.id)))
    .catch(error => error);
};

//THESE THREE FUNCTIONS ARE EXACTLY ALIKE, THINK OF REFACTORING
export const fetchTables = () => dispatch => {
  fetch(`https://check-api.herokuapp.com/tables`, {
    headers: {
      Authorization: process.env.API_KEY
    }
  })
    .then(response => response.json())
    .then(response => dispatch(getTables(response)))
    .catch(error => error);
};

export const fetchItems = () => dispatch => {
  fetch(`https://check-api.herokuapp.com/items`, {
    headers: {
      Authorization: API_KEY
    }
  })
    .then(response => response.json())
    .then(response => dispatch(getItems(response)))
    .catch(error => error);
};

export const fetchChecks = () => dispatch => {
  fetch(`https://check-api.herokuapp.com/checks`, {
    headers: {
      Authorization: process.env.API_KEY
    }
  })
    .then(response => response.json())
    .then(response => dispatch(getChecks(response)))
    .catch(error => error);
};

export const deleteAllChecks = () => dispatch => {
  fetch(`https://check-api.herokuapp.com/checks`, {
    method: 'DELETE',
    headers: {
      Authorization: process.env.API_KEY
    }
  })
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
};
