import { takeLatest, all } from 'redux-saga/effects';
import { GetPostsApi } from '../service/GetPostsApi';
/* ------------- Types ---------  ---- */

/* ------------- Sagas ------------- */
import { getPostsRequest, addPostsRequest, updatePostRequest, deletePostRequest } from './Posts/saga';

//Add individual sagas here

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const getPostApi = new GetPostsApi();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    //make all saga generators
    takeLatest('POSTS_REQUEST', getPostsRequest, getPostApi),
    takeLatest('ADD_POST_REQUEST', addPostsRequest, getPostApi),
    takeLatest('UPDATE_POST_REQUEST', updatePostRequest, getPostApi),
    takeLatest('DELETE_POST_REQUEST', deletePostRequest, getPostApi),
  ]);
}
