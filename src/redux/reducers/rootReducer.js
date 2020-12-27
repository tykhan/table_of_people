import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { usersReducer } from './usersReducer';
import { postCommentsReducer } from './postCommentsReducer';
import { postsReducer } from './postsReducer';
import { postDetailsReducer } from './postDetailsReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  postDetails: postDetailsReducer,
  postComments: postCommentsReducer,
  loading: loadingReducer,
});

export const selectors = {
  getLoading: state => state.loading,
  getUsers: state => state.users.users,
  getPosts: state => state.posts.posts,
  getPostComments: state => state.postComments.comments,
  getPostDetails: state => state.postDetails.post,
}
