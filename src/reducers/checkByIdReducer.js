const checkByIdReducer = (state = {}, action) => {
  switch (action.type) {
  case 'GET_CHECK_BY_ID':
    return action.check;
  default:
    return state;
  }
};

export default checkByIdReducer;
