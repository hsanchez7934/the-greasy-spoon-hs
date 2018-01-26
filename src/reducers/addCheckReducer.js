const addedCheckReducer = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_CHECK':
    return action.check;
  default:
    return state;
  }
};

export default addedCheckReducer;
