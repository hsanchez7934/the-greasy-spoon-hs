import { combineReducers } from 'redux';
import tables from './tablesReducer.js';
import addCheckReducer from './addCheckReducer.js';
import items from './itemsReducer.js';

const rootReducer = combineReducers({
  tables,
  items,
  addCheckReducer
});

export default rootReducer;
