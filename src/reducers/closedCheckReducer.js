const closedCheckReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CLOSE_CHECK':
    return action.check;
  default:
    return state;
  }
};

export default closedCheckReducer;
