import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';
import config from '../../tests/testSetup.js';

describe(`App component unit test`, () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App/>);
  });

  test(`should render an instance of App`, () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
