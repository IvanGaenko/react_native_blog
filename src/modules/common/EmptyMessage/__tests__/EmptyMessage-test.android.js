import React from 'react';
import { shallow } from 'enzyme';
import EmptyMessage from '..';

const test = 'Hello World';

describe('<EmptyMessage />', () => {
  it('EmptyMessage', () => {
    const wrapper = shallow(<EmptyMessage />);
    expect(wrapper.find('View')).toBeTruthy();
    expect(wrapper.find('Text')).toBeTruthy();
    expect(wrapper.find('View')).toHaveLength(1);
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  it('renders message test properly', () => {
    const wrapper = shallow(<EmptyMessage message={test} />);
    expect(wrapper.find('Text').props().children).toEqual('Hello World');
  });
});
