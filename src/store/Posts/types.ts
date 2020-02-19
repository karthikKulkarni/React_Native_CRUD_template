export type Post = {
  userId: number;
  id?: number;
  title: string;
  body: string;
};

//Get All Posts
export type AllPostsInput = {
  id: number;
};

export type AllPostsData = Post[];

export type AllPostsType =
  | { type: 'POSTS_REQUEST'; input?: AllPostsInput }
  | { type: 'POSTS_SUCCESS'; posts: AllPostsData }
  | { type: 'POSTS_FAILURE'; error: string };

//Add a post
export type AddPostInput = {
  post: Post;
};

export type AddPostData = {
  id: number;
  post: Post;
};

export type AddPostsType =
  | { type: 'ADD_POST_REQUEST'; input: AddPostInput }
  | { type: 'ADD_POST_SUCCESS'; newPost: AddPostData }
  | { type: 'ADD_POST_FAILURE'; error: string };

//Update a post

export type UpdatePostInput = {
  postBody: Post;
  postId: number;
};

export type UpdatedPostData = {
  id: number;
  post: Post;
};

export type UpdatePostType =
  | { type: 'UPDATE_POST_REQUEST'; updatePost: UpdatePostInput }
  | { type: 'UPDATE_POST_SUCCESS'; updatedPost: UpdatedPostData }
  | { type: 'UPDATE_POST_FAILURE'; error: string };

//Delete a post

export type DeletePostInput = {
  postId: number;
};

export type DeletedPostData = {
  post: Post;
};

export type DeletePostType =
  | { type: 'DELETE_POST_REQUEST'; deletePost: DeletePostInput }
  | { type: 'DELETE_POST_SUCCESS'; deletedPost: DeletedPostData }
  | { type: 'DELETE_POST_FAILURE'; error: string };

//Posts Types
export type PostTypes = AllPostsType | AddPostsType | UpdatePostType | DeletePostType;
