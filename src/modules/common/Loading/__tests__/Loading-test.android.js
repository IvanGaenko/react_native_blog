import React from 'react';
import { shallow } from 'enzyme';
import Loading from '..';

import { grey2 } from '../../../../ui/colors';

describe('<Loading />', () => {
  it('Loading', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find('View')).toBeTruthy();
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('renders Loading properly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find('ActivityIndicator').props().size).toEqual('large');
    expect(wrapper.find('ActivityIndicator').props().color).toEqual(grey2);
  });
});
