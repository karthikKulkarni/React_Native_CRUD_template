import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { __HomeScreen } from '../HomeScreen';
import { Post } from '../../store/Posts/types';

describe('Home Screen', () => {
  const posts: Post[] = [{ userId: 0, id: 2, title: 'Foo', body: 'Boo' }];
  const props = {
    posts,
  };

  it('should render correctly', () => {
    const wrapper = shallow(<__HomeScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should check if Homescreen_Create_Btn exists', () => {
    const wrapper = shallow(<__HomeScreen {...props} />);

    const createBtn = wrapper.findWhere(node => node.prop('testID') === 'Homescreen_Create_Btn');

    expect(createBtn).toExist();
    expect(createBtn.first().props().title).toEqual('Create');
  });
});
