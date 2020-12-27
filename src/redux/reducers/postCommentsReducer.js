import { LOAD_POST_COMMENTS_ERROR, LOAD_POST_COMMENTS_SUCCESS} from '../../_variables/constants';

const initialState = {
  error: null,
  comments: []
}

export const postCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POST_COMMENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}
