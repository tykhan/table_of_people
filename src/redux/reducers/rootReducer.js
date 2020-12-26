import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { usersReducer } from './usersReducer';
import { postCommentsReducer } from './postCommentsReducer';
import { postsReducer } from './postsReducer';
import { } from '../../_variables/constants';

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  postComments: postCommentsReducer,
  loading: loadingReducer,
});

export const selectors = {
  getUsers: state => state.users.users,
  getLoading: state => state.loading,
  getPostComments: state => state.loaing
}
