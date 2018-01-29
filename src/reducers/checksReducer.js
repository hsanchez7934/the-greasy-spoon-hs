const checks = (state = [], action) => {
  switch (action.type) {
  case 'GET_CHECKS':
    return action.checksArray;
  default:
    return state;
  }
};

export default checks;
