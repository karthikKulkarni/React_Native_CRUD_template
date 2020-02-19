import {
  Post,
  AllPostsType,
  AllPostsInput,
  AllPostsData,
  AddPostsType,
  AddPostInput,
  AddPostData,
  UpdatePostInput,
  UpdatePostData,
  UpdatePostType,
  DeletePostInput,
  DeletePostType,
  DeletedPostData,
} from './types';

//Get all posts
export function allPostsRequest(input?: AllPostsInput): AllPostsType {
  return { type: 'POSTS_REQUEST', input };
}

export function allPostsSuccess(posts: Post[]): AllPostsType {
  return { type: 'POSTS_SUCCESS', posts };
}

export function allPostsFailure(error: string): AllPostsType {
  return { type: 'POSTS_FAILURE', error };
}

//Add new posts
export function addPostsRequest(post: Post): AddPostsType {
  return { type: 'ADD_POST_REQUEST', input: { post } };
}

export function addPostsSuccess(newPost: AddPostData): AddPostsType {
  return { type: 'ADD_POST_SUCCESS', newPost };
}

export function addPostsFailure(error?: string) {
  return { type: 'ADD_POST_FAILURE', error };
}

//Update post
export function updatePostRequest(updatePost: UpdatePostInput): UpdatePostType {
  return { type: 'UPDATE_POST_REQUEST', updatePost };
}

export function updatePostsSuccess(updatedPost: UpdatePostData): UpdatePostType {
  return { type: 'UPDATE_POST_SUCCESS', updatedPost };
}

export function updatePostsFailure(error: string): UpdatePostType {
  return { type: 'UPDATE_POST_FAILURE', error };
}

//Delete a post
export function deletePostRequest(deletePost: DeletePostInput): DeletePostType {
  return { type: 'DELETE_POST_REQUEST', deletePost };
}

export function deletedPostsSuccess(deletedPost: DeletedPostData): DeletePostType {
  return { type: 'DELETE_POST_SUCCESS', deletedPost };
}

export function deletePostsFailure(error: string): DeletePostType {
  return { type: 'DELETE_POST_FAILURE', error };
}
