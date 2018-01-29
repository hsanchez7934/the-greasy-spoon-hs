import { combineReducers } from 'redux';
import tables from './tablesReducer.js';
import checks from './checksReducer.js';
import items from './itemsReducer.js';
import checkByIdReducer from './checkByIdReducer.js';

const rootReducer = combineReducers({
  tables,
  items,
  checkByIdReducer,
  checks
});

export default rootReducer;
