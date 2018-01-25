const items = (state = [], action) => {
  switch (action.type) {
  case 'GET_ITEMS':
    return action.itemsArray;
  default:
    return state;
  }
};

export default items;
