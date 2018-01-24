const tables = (state = [], action) => {
  switch (action.type) {
  case 'GET_TABLES':
    return action.tablesArray;
  default:
    return state;
  }
};

export default tables;
