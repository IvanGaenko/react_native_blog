import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import Body from '..';

const test = <View testID="hello">Hello</View>;

describe('<Body />', () => {
  it('Body', () => {
    const wrapper = shallow(<Body />);
    expect(wrapper.props().children).toBeTruthy();
    expect(wrapper.find('View')).toHaveLength(2);
  });

  it('renders children test properly', () => {
    const wrapper = shallow(<Body>{test}</Body>);
    expect(wrapper.find('View')).toHaveLength(3);
    expect(wrapper.find('View').at(2).props().testID).toEqual('hello');
    expect(wrapper.find('View').at(2).props().children).toEqual('Hello');
  });
});
