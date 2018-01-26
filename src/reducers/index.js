import { combineReducers } from 'redux';
import tables from './tablesReducer.js';
import addedCheckReducer from './addCheckReducer.js';
import items from './itemsReducer.js';
import addItemToCheckReducer from './putItemReducer.js';
import checkByIdReducer from './checkByIdReducer.js';

const rootReducer = combineReducers({
  tables,
  items,
  addedCheckReducer,
  addItemToCheckReducer,
  checkByIdReducer
});

export default rootReducer;
