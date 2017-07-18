import React from 'react';
import { shallow } from 'enzyme';
import {} from 'jest';

import HomeRoute from '../HomeRoute';

describe('<HomeRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<HomeRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
