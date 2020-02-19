import apisauce, { ApisauceInstance, ApiResponse } from 'apisauce';
import { Post, AllPostsType, AddPostsType, UpdatePostType, DeletePostType } from '../store/Posts/types';

export class GetPostsApi {
  api: ApisauceInstance;

  constructor(baseURL = 'https://jsonplaceholder.typicode.com') {
    this.api = apisauce.create({
      baseURL,
      headers: {},
      timeout: 15000,
    });
  }

  getAllPosts = (): Promise<ApiResponse<AllPostsType>> => this.api.get('/posts');

  addNewPost = (body: Post): Promise<ApiResponse<AddPostsType>> => this.api.post('/posts', body);

  updatePost = (body: Post, postId: number): Promise<ApiResponse<UpdatePostType>> => {
    return this.api.put(`/posts/${postId}`, body);
  };

  deletePost = (postId: number): Promise<ApiResponse<DeletePostType>> => {
    return this.api.put(`/posts/${postId}`);
  };
}
