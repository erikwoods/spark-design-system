/* global it expect */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkListItem from './SprkListItem';

Enzyme.configure({ adapter: new Adapter() });

it('should display a li element', () => {
  const wrapper = shallow(<SprkListItem />);
  expect(wrapper.find('li').length).toBe(1);
});

it('should add classes to li element if additionalClasses has a value', () => {
  const wrapper = shallow(<SprkListItem additionalClasses="additionalClass" />);
  expect(wrapper.find('li').hasClass('additionalClass')).toBe(true);
});

it('should add data-id to li element if idString has a value', () => {
  const wrapper = shallow(<SprkListItem idString="list-item-1" />);
  expect(wrapper.find('li[data-id="list-item-1"]').length).toBe(1);
});
