import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from './sagas';
import {
  addPostsReducer,
  updatePostsReducer,
  allPostsReducer,
  deletePostsReducer,
  postsReducer,
} from './Posts/reducer';

/* ------------- Assemble The Reducers ------------- */
const rootReducer = combineReducers({
  rawPosts: allPostsReducer,
  rawNewPost: addPostsReducer,
  rawUpdatedPost: updatePostsReducer,
  rawDeletedPost: deletePostsReducer,
  posts: postsReducer,
});

// Create the store
export const createStore = () => configureStore(rootReducer, rootSaga);

// Create Types for our AppState
export type GlobalState = ReturnType<typeof rootReducer>;

export interface StandardApiState<T> {
  data: T;
  status: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  dateFetched: Date;
}
