import { LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } from '../../_variables/constants';
import * as api from '../../api/api';
import * as loadingActions from './loadingActions';

export const postsLoadError = (error) => ({
  type: LOAD_POSTS_ERROR,
  payload: error,
});

export const postsLoadSuccess = (users) => ({
  type: LOAD_POSTS_SUCCESS,
  payload: users,
})

export const loadPostsThunk = () => async (dispatch) => {
  dispatch(loadingActions.startLoading());
  try {
    const posts = await api.getPosts();
    dispatch(postsLoadSuccess(posts));
  } catch (error) {
    dispatch(postsLoadError(error));
  }
  dispatch(loadingActions.stopLoading());
}

export const loadUserPostsThunk = (userId) => async(dispatch) => {
  const userPosts = await api.getUserPosts();
  return userPosts;
}


