import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';
import config from '../../tests/testSetup.js';
import toJson from 'enzyme-to-json';

describe(`App component unit test`, () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test(`should render an instance of App`, () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test(`should render correctly`, () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test(`should have parent div node with class name App`, () => {
    const parent = wrapper.find('div').at(0);

    expect(parent.exists()).toEqual(true);
    expect(parent.hasClass('App')).toEqual(true);
  });

  test(`should render an instance of HomeScreen component `, () => {
    const homescreen = wrapper.find('HomeScreen');
    expect(homescreen.exists()).toEqual(true);
  });
  
});
