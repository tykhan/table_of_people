import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { usersReducer } from './usersReducer';
import { postCommentsReducer } from './postCommentsReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  postComments: postCommentsReducer,
  loading: loadingReducer,
});

export const selectors = {
  getLoading: state => state.loading,
  getUsers: state => state.users.users,
  getPosts: state => state.posts.posts,
  getPostComments: state => state.loaing
}
