import React from 'react';
import { shallow } from 'enzyme';
import Input from '..';

const testState = { word: 'Hello' };

describe('<Input />', () => {
  it('Input', () => {
    const wrapper = shallow(<Input />);
    const props = wrapper.props();
    expect(props.platform).toEqual('ios');
    expect(props.placeholder).toEqual('Search');
  });
  it('Input gets word', () => {
    const onChangeInputText = jest.fn((a) => a);
    const wrapper = shallow(<Input onChangeInputText={onChangeInputText} />);
    expect(Object.keys(wrapper.state())).toHaveLength(1);
    expect(wrapper.state().word).toEqual('');
    wrapper.instance().onChange(testState.word);
    expect(wrapper.state().word).toEqual(testState.word);
    expect(onChangeInputText).toHaveBeenCalledTimes(1);
  });
});
