const addItemToCheckReducer = (state = {}, action) => {
  switch (action.type) {
  case 'PUT_ITEM':
    return action.item;
  default:
    return state;
  }
};

export default addItemToCheckReducer;
