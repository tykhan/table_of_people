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

export const loadPostsThunk = (userId) => async (dispatch) => {
  dispatch(loadingActions.startLoading());
  try {
    if (userId === '0') {
      const posts = await api.getPosts();
      dispatch(postsLoadSuccess(posts));
    } else {
      const posts = await api.getUserPosts(userId);
      dispatch(postsLoadSuccess(posts))
    }
  } catch (error) {
    dispatch(postsLoadError(error));
  }
  dispatch(loadingActions.stopLoading());
}
