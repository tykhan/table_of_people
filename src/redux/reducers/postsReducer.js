import { LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } from '../../_variables/constants';

const initialState = {
  posts: [],
  error: null,
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case LOAD_POSTS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
