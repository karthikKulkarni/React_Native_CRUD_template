import {
  Post,
  AllPostsType,
  AllPostsData,
  AddPostData,
  AddPostsType,
  UpdatePostType,
  UpdatedPostData,
  DeletePostType,
  DeletedPostData,
  PostTypes,
} from './types';
import { StandardApiState } from '..';
import { createEmptyState } from '../util';
import _ from 'lodash';

//Get Posts Reducer
const initialData: AllPostsData = [];
const initialState = createEmptyState(initialData);

export function allPostsReducer(state = initialState, action: AllPostsType): StandardApiState<AllPostsData> {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return { ...state, isLoading: true };
    case 'POSTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        dateFetched: new Date(),
        data: [...action.posts], // This implementation is incorrect, something fishy
      };
    case 'POSTS_FAILURE':
      return { ...state, isLoading: false, isError: true, errorMessage: action.error };
    default:
      return state;
  }
}

//Add Post Reducer
const addPostInitData: AddPostData = {
  id: 0,
  post: {
    userId: 0,
    title: '',
    body: '',
  },
};
const addPostInitState = createEmptyState(addPostInitData);

export function addPostsReducer(
  state = addPostInitState,
  action: AddPostsType,
): StandardApiState<AddPostData> {
  switch (action.type) {
    case 'ADD_POST_REQUEST':
      return { ...state, isLoading: true };
    case 'ADD_POST_SUCCESS':
      return { ...state, isLoading: false, isError: false, dateFetched: new Date(), data: action.newPost };
    case 'ADD_POST_FAILURE':
      return { ...state, isLoading: false, isError: true, errorMessage: action.error };
    default:
      return state;
  }
}

//Update Post Reducer
const updatePostInitData: UpdatedPostData = {
  id: 0,
  post: {
    userId: 0,
    title: '',
    body: '',
  },
};
const updatePostInitState = createEmptyState(updatePostInitData);

export function updatePostsReducer(
  state = updatePostInitState,
  action: UpdatePostType,
): StandardApiState<UpdatedPostData> {
  switch (action.type) {
    case 'UPDATE_POST_REQUEST':
      return { ...state, isLoading: true };
    case 'UPDATE_POST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        dateFetched: new Date(),
        data: action.updatedPost,
      };
    case 'UPDATE_POST_FAILURE':
      return { ...state, isLoading: false, isError: true, errorMessage: action.error };
    default:
      return state;
  }
}

//Update Post Reducer
const deletePostInitData: DeletedPostData = {
  post: {
    userId: 0,
    title: '',
    body: '',
  },
};
const deletePostInitState = createEmptyState(deletePostInitData);

export function deletePostsReducer(
  state = deletePostInitState,
  action: DeletePostType,
): StandardApiState<DeletedPostData> {
  switch (action.type) {
    case 'DELETE_POST_REQUEST':
      return { ...state, isLoading: true };
    case 'DELETE_POST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        dateFetched: new Date(),
        data: action.deletedPost,
      };
    case 'DELETE_POST_FAILURE':
      return { ...state, isLoading: false, isError: true, errorMessage: action.error };
    default:
      return state;
  }
}

//Custom posts list

const initPost: Post[] = [];
export function postsReducer(state = initPost, action: PostTypes): Post[] {
  switch (action.type) {
    case 'POSTS_SUCCESS':
      return [...action.posts];

    case 'ADD_POST_SUCCESS':
      const newPost: any = action.newPost;
      console.log('newPost', newPost);
      newPost.id = _.get(action, 'newPost.id', 0);
      return [...state, newPost];

    case 'UPDATE_POST_SUCCESS':
      const updatedPost = _.get(action, 'updatedPost');

      const updatedList: Post[] = state.map((item: Post) =>
        item.id === updatedPost.id ? updatedPost.post : item,
      );
      return updatedList;

    case 'DELETE_POST_SUCCESS':
    case 'DELETE_POST_FAILURE':
      console.log('action', action);
      const index = _.findIndex(state, { id: _.get(action, 'deletedPost.id') });

      const updatedListDelete: Post[] = state.filter((item, i) => i !== index);
      return updatedListDelete;

    default:
      return state;
  }
}
