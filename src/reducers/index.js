import { combineReducers } from 'redux';
import tables from './tablesReducer.js';
import addCheckReducer from './addCheckReducer.js';

const rootReducer = combineReducers({
  tables,
  addCheckReducer
});

export default rootReducer;
