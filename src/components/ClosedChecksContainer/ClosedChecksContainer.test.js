import React, { Component } from 'react';
import { ClosedChecksContainer } from './ClosedChecksContainer';
import { shallow } from 'enzyme';
import config from '../../tests/testSetup.js';
import toJson from 'enzyme-to-json';
import tables from '../../testMockData/tables.js';
import checksArray from '../../testMockData/checks.js';

describe(`ClosedChecksContainer unit tests`, () => {
  let wrapper;
  let func1;
  let func2;
  let func3;

  beforeEach(() => {
    func1 = () => {};
    func2 = () => {};
    func3 = () => {};
    wrapper = shallow(
      <ClosedChecksContainer
        tables={tables}
        checks={checksArray}
        fetchChecks={func1}
        fetchTables={func2}
        fetchCheckById={func3} />
    );
  });

  test(`should create an instance of ClosedChecksContainer`, () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test(`should match snapshot`, () => {
    expect(wrapper).toMatchSnapshot();
  });

  test(`should render section node`, () => {
    const section = wrapper.find('section');

    expect(section.exists()).toEqual(true);
    expect(section.type()).toEqual('section');
  });

  test(`should render article that has closed check information`, () => {
    const article = wrapper.find('article');
    
    expect(article.exists()).toEqual(true);
    expect(article.type()).toEqual('article');
  });
});
