import apiKey from '../apikey.js';

export const getTables = tablesArray => ({
  type: 'GET_TABLES',
  tablesArray
});

export const fetchTables = () => dispatch => {
  fetch(`https://check-api.herokuapp.com/checks`, {
    headers: {
      Authorization: apiKey
    }
  })
    .then(response => response.json())
    .then(response => dispatch(getTables(response)))
    .catch(error => console.log(error));
};
