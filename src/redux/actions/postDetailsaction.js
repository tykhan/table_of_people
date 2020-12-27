import {
  LOAD_POST_COMMENTS_ERROR,
  LOAD_POST_COMMENTS_SUCCESS,
  LOAD_POST_DETAILS_ERROR,
  LOAD_POST_DETAILS_SUCCESS
} from '../../_variables/constants';
import * as api from '../../api/api';
import * as loadingActions from './loadingActions';

export const postCommentsLoadError = (error) => ({
  type: LOAD_POST_COMMENTS_ERROR,
  payload: error,
});

export const postCommentsLoadSuccess = (comments) => ({
  type: LOAD_POST_COMMENTS_SUCCESS,
  payload: comments,
});

export const postLoadError = (error) => ({
  type: LOAD_POST_DETAILS_ERROR,
  payload: error,
});

export const postLoadSuccess = (post) => ({
  type: LOAD_POST_DETAILS_SUCCESS,
  payload: post,
});

export const loadPostCommentsThunk = (commentId) => async (dispatch) => {
  dispatch(loadingActions.startLoading());
  try {
    const comments = await api.getPostComments(commentId);
    dispatch(postCommentsLoadSuccess(comments));
  } catch (error) {
    dispatch(postCommentsLoadError(error));
  }
  dispatch(loadingActions.stopLoading());
}

export const loadPostThunk = (postId) => async (dispatch) => {
  dispatch(loadingActions.startLoading());
  try {
    const post = await api.getPostDetails(postId);
    dispatch(postLoadSuccess(post))
  } catch (error) {
    dispatch(postLoadError(error));
  }
  dispatch(loadingActions.stopLoading());
}
