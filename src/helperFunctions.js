import moment from 'moment';

export const findTable = (tableID, array) => {
  const table = array.filter( table =>
    table.id === tableID);
  return table[0].number;
};

export const formatDate = (date) => {
  const newDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
  return newDate;
};

export const queryForChecks = (array, condition) => (
  array.filter( check => check.closed === condition)
);

export const filterItem = (array, itemID) => {
  const filteredItem = array.filter( item => item.id === itemID);
  return filteredItem[0];
};

export const voidedClassName = (item) => {
  return item.voided === true
    ? 'items-list-styles red'
    : 'items-list-styles';
};

export const itemsTotal = (array1, array2) => {
  if (array1) {
    let filtered;
    return array1.reduce((acc, item) => {
      filtered = filterItem(array2, item.itemId);
      if (item.voided === false) {
        acc += filtered.price;
      } else if (item.voided === true) {
        filtered.price - acc;
      }
      return acc;
    }, 0);
  }
  return 0;
};
