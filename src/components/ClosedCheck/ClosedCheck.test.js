import React from 'react';
import ClosedCheck from './ClosedCheck';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import config from '../../tests/testSetup.js';
import toJson from 'enzyme-to-json';
import items from '../../testMockData/items.js';
import tables from '../../testMockData/tables.js';
import storedCheck from '../../testMockData/storedCheck.js';
import jest from 'jest';

describe(`ClosedCheck component unit tests`, () => {
  let wrapper;
  let func;

  beforeEach(() => {
    func = () => {};
    wrapper = mount(
      <MemoryRouter>
        <ClosedCheck
          tables={tables}
          items={items}
          storedCheck={storedCheck}
          newCheckAdded={func} />
      </MemoryRouter>
    );
  });

  test(`should create an instance of ClosedCheck`, () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test(`should render an article node`, () => {
    const article = wrapper.find('article');

    expect(article.exists()).toEqual(true);
    expect(article.type()).toEqual('article');
  });

  test(`should render h3, h2 nodes`, () => {
    const h3 = wrapper.find('h3');
    const h2 = wrapper .find('h2');

    expect(h3.exists()).toEqual(true);
    expect(h2.exists()).toEqual(true);

    expect(h3.type()).toEqual('h3');
    expect(h2.type()).toEqual('h2');
  });

  test(`should render section node that contains
        ul, li child nodes, li node should contain
        span child node `, () => {
      const section = wrapper.find('section');
      const ul = section.find('ul');
      const li = ul.find('li');
      const span = li.at(0).find('span');

      expect(section.exists()).toEqual(true);
      expect(ul.exists()).toEqual(true);
      expect(li.exists()).toEqual(true);
      expect(span.exists()).toEqual(true);

      expect(section.type()).toEqual('section');
      expect(ul.type()).toEqual('ul');
      expect(li.at(0).type()).toEqual('li');
      expect(span.type()).toEqual('span');
    });

  test(`should render six p nodes`, () => {
    const pNodes = wrapper.find('p');

    expect(pNodes.length).toEqual(6);
    expect(pNodes.at(0).type()).toEqual('p');
  });

  test(`should render div node with button child node`, () => {
    const div = wrapper.find('div');
    const button = div.find('button');

    expect(div.exists()).toEqual(true);
    expect(div.type()).toEqual('div');

    expect(button.exists()).toEqual(true);
    expect(button.type()).toEqual('button');
  });
});
