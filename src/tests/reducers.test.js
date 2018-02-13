import * as actions from '../actions';
import checkByIdReducer from '../reducers/checkByIdReducer';
import checks from '../reducers/checksReducer';
import items from '../reducers/itemsReducer';
import tables from '../reducers/tablesReducer';

describe(`Reducers unit testing`, () => {
  let stateObject;
  let stateArray;

  beforeEach(() => {
    stateArray = [];
    stateObject = {};
  });

  test(`checkByIdReducer should return action.check when type is GET_CHECK_BY_ID`, () => {

    expect(checkByIdReducer(undefined, [])).toEqual(stateObject);

    const check = {
      id: "8315ad01-41d7-4392-be9a-790e571888b2",
      dateCreated: "2018-02-13T02:25:02.699035Z",
      dateUpdated: "2018-02-13T02:25:21.092439Z",
      createdBy: "23037775-39f4-48fa-806a-908727b77957",
      tableId: "c482731d-19a4-4d1f-90ab-e4dc4ac7d28d",
      closed: true,
      tax: 3.08,
      tip: 7.4844007
    };

    const action = actions.checkById(check);
    const expectation = action.check;

    expect(checkByIdReducer(undefined, action)).toEqual(expectation);
  });

  test(`checksReducer should return action.checksArray when type is GET_CHECKS`, () => {

    expect(checks(undefined, [])).toEqual(stateArray);

    const checksArray = [
      {
        id: "6400dc63-857b-4c12-a1bd-469e4cccae12",
        dateCreated: "2018-02-13T02:26:08.268361Z",
        dateUpdated: "2018-02-13T03:01:10.865959Z",
        createdBy: "23037775-39f4-48fa-806a-908727b77957",
        tableId: "2644ece3-83dd-4deb-ae02-54f4df083e16",
        closed: false,
        tax: null,
        tip: null
      },
      {
        id: "ab7a931f-2d77-4d87-b09a-737d196d54f6",
        dateCreated: "2018-02-13T02:26:19.335022Z",
        dateUpdated: "2018-02-13T03:01:01.897597Z",
        createdBy: "23037775-39f4-48fa-806a-908727b77957",
        tableId: "51f719e1-830e-40bb-9c1a-493ccc13cbc0",
        closed: false,
        tax: null,
        tip: null
      },
      {
        id: "f2bf62e8-5dee-4609-b695-0c273318fb79",
        dateCreated: "2018-02-13T02:55:50.871818Z",
        dateUpdated: "2018-02-13T02:56:03.891757Z",
        createdBy: "23037775-39f4-48fa-806a-908727b77957",
        tableId: "f5a3d871-1548-4be5-9f5a-e9a6e2011187",
        closed: true,
        tax: 4.6,
        tip: 11.178
      }
    ];

    const action = actions.getChecks(checksArray);
    const expectation = action.checksArray;

    expect(checks(undefined, action)).toEqual(expectation);
  });

  test(`itemssReducer should return action.itemsArray when type is GET_ITEMS`, () => {

    expect(checks(undefined, [])).toEqual(stateArray);

    const itemsArray = [
      {
        id: "348e706c-ab3b-4a6e-a391-8de96ac7e0a3",
        name: "PULL-APART BREAD",
        price: 4.5
      },
      {
        id: "92d26789-a296-4910-b7a9-b08e68d9e44d",
        name: "GREEN SALAD ",
        price: 8
      },
      {
        id: "abae32ec-05e5-4072-ba54-3a46764a5eff",
        name: "MORTGAGE LIFTER BEANS",
        price: 6
      }
    ];

    const action = actions.getItems(itemsArray);
    const expectation = action.itemsArray;

    expect(items(undefined, action)).toEqual(expectation);
  });

  test(`tablesReducer should return action.tablesArray when type is GET_TABLES`, () => {

    expect(tables(undefined, [])).toEqual(stateArray);

    const tablesArray = [
      {
        id: "2644ece3-83dd-4deb-ae02-54f4df083e16",
        number: 1
      },
      {
        id: "c482731d-19a4-4d1f-90ab-e4dc4ac7d28d",
        number: 2
      },
      {
        id: "51f719e1-830e-40bb-9c1a-493ccc13cbc0",
        number: 3
      }
    ];

    const action = actions.getTables(tablesArray);
    const expectation = action.tablesArray;

    expect(tables(undefined, action)).toEqual(expectation);
  });
});
