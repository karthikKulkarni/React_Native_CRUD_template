import * as actions from '../action';
import * as reducers from '../reducer';
import { AllPostsInput, Post, AllPostsType } from '../types';

describe('actions', () => {
  describe('Get all the posts', () => {
    it('should create a action to request list of posts', () => {
      const input: AllPostsInput = { id: 10 };
      const expectedAction = { type: 'POSTS_REQUEST', input };

      expect(actions.allPostsRequest(input)).toEqual(expectedAction);
    });

    it('should create a action to handle success', () => {
      const posts: Post[] = [];
      const expectedAction = { type: 'POSTS_SUCCESS', posts };

      expect(actions.allPostsSuccess(posts)).toEqual(expectedAction);
    });

    it('should create a action to handle error', () => {
      const error: string = 'Network Error';
      const expectedAction = { type: 'POSTS_FAILURE', error };

      expect(actions.allPostsFailure(error)).toEqual(expectedAction);
    });
  });
});

describe('reducers', () => {
  describe('Get all the posts', () => {
    it('POSTS_REQUEST: should return the initial state for Request', () => {
      const action: AllPostsType = { type: 'POSTS_REQUEST', input: { id: 10 } };
      const expectedState = {
        data: [],
        status: '',
        isLoading: true,
        errorMessage: '',
        isError: false,
        dateFetched: new Date('2000-1-1'),
      };

      expect(reducers.allPostsReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
