import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkStepper from './SprkStepper';
import SprkStepperItem from './components/SprkStepperItem/SprkStepperItem'

Enzyme.configure({ adapter: new Adapter() });

// Root Element Tests
it('should display a stepper element with the correct base class', () => {
  const wrapper = shallow(<SprkStepper />);
  expect(wrapper.find('ol.sprk-c-Stepper').length).toBe(1);
});