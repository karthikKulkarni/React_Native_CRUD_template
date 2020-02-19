import { call, put, takeLatest } from 'redux-saga/effects';
import { GetPostsApi } from '../../service/GetPostsAPI';
import * as actions from './action';
import { AddPostsType } from './types';

export function* getPostsRequest(api: GetPostsApi) {
  try {
    const response = yield call(api.getAllPosts);
    const result = response.data;
    if (response.ok) {
      yield put(actions.allPostsSuccess(result));
    } else {
      yield put(actions.allPostsFailure(response.problem));
    }
  } catch (error) {
    yield put(actions.allPostsFailure(error));
  }
}

export function* addPostsRequest(api: GetPostsApi, action: any) {
  try {
    const response = yield call(api.addNewPost, action.input);
    const result = response.data;
    console.log('response addPostsRequest', action.input.post);
    if (response.ok) {
      yield put(actions.addPostsSuccess(result));
    } else {
      yield put(actions.addPostsSuccess({ id: 1010, ...action.input.post }));
      // yield put(actions.addPostsFailure(response.problem));
    }
  } catch (error) {
    console.log('ERROR', error);
    yield put(actions.addPostsFailure(error));
  }
}

export function* updatePostRequest(api: GetPostsApi, action: any) {
  const { postBody, postId } = action.updatePost;
  try {
    const response = yield call(api.updatePost, postBody, postId);
    const result = response.data;
    console.log('response', response);
    if (response.ok) {
      yield put(actions.updatePostsSuccess(result));
    } else {
      yield put(actions.updatePostsFailure(response.problem));
    }
  } catch (error) {
    yield put(actions.updatePostsFailure(error));
  }
}

export function* deletePostRequest(api: GetPostsApi, action: any) {
  const { postId } = action.deletePost;
  try {
    const response = yield call(api.deletePost, postId);
    const result = response.data;
    console.log('response', response);
    if (response.ok) {
      yield put(actions.deletedPostsSuccess(result));
    } else {
      yield put(actions.deletePostsFailure(response.problem));
    }
  } catch (error) {
    yield put(actions.deletePostsFailure(error));
  }
}
