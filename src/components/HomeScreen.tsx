import React, { Component } from 'react';
import * as _ from 'lodash';
import { View, Text, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { GlobalState, StandardApiState } from '../store';
import {
  allPostsRequest,
  addPostsRequest,
  updatePostRequest,
  deletePostRequest,
} from '../store/Posts/action';
import { Post, UpdatePostInput, DeletePostInput, AllPostsData } from '../store/Posts/types';

export interface Props {
  allPostsRequest?: typeof allPostsRequest;
  rawPosts?: StandardApiState<AllPostsData>;
  addPostsRequest?: typeof addPostsRequest;
  updatePostRequest?: typeof updatePostRequest;
  deletePostRequest?: typeof deletePostRequest;

  posts: Post[];
}

export class __HomeScreen extends Component<Props> {
  componentDidMount() {
    this.props.allPostsRequest && this.props.allPostsRequest();
  }

  createPost = () => {
    const newPost: Post = { title: 'foo', body: 'bar', userId: 1 };
    this.props.addPostsRequest && this.props.addPostsRequest(newPost);
  };

  updatePost = () => {
    const updatePost: UpdatePostInput = { postBody: { title: 'Ufoo', body: 'Ubar', userId: 1 }, postId: 5 };
    this.props.updatePostRequest && this.props.updatePostRequest(updatePost);
  };

  deletePost = (item: Post) => {
    const deletePost: DeletePostInput = { postId: item.id ? item.id : 0 };
    this.props.deletePostRequest && this.props.deletePostRequest(deletePost);
  };

  renderItem = ({ item }: { item: Post }) => {
    return (
      <TouchableOpacity onPress={() => this.deletePost(item)}>
        <View style={{ width: '100%', flexDirection: 'column' }}>
          <Text style={{ width: '100%', backgroundColor: '#E6E6E6' }}>{item.title}</Text>
          <Text style={{ width: '100%', backgroundColor: '#F7F7F7' }}>{item.body}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderEmptyComponent = () => {
    const { rawPosts } = this.props;

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
        {rawPosts ? (
          <Text
            style={{
              width: '100%',
              backgroundColor: rawPosts.isLoading ? 'orange' : 'red',
              textAlign: 'center',
            }}
          >
            {rawPosts.isLoading ? 'Loading...' : rawPosts.errorMessage}
          </Text>
        ) : (
          <Text> No Posts to show</Text>
        )}
      </View>
    );
  };

  render() {
    const { posts } = this.props;

    return (
      <View style={{ flex: 1, margin: 16 }} testID={'Homescreen_container'}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Button onPress={this.createPost} title={'Create'} testID={'Homescreen_Create_Btn'} />
          <Button onPress={this.updatePost} title={'Update'} />
        </View>
        <FlatList data={posts} renderItem={this.renderItem} ListEmptyComponent={this.renderEmptyComponent} />
      </View>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  rawPosts: state.rawPosts,
  rawNewPost: state.rawNewPost,
  rawUpdatePost: state.rawUpdatedPost,
  rawDeletedPost: state.rawDeletedPost,
  posts: state.posts,
});

export default connect(mapStateToProps, {
  allPostsRequest,
  addPostsRequest,
  updatePostRequest,
  deletePostRequest,
})(__HomeScreen);
