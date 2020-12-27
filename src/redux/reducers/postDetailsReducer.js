import { LOAD_POST_DETAILS_ERROR, LOAD_POST_DETAILS_SUCCESS } from '../../_variables/constants';

const initialState = {
  post: {},
  error: null,
}

export const postDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POST_DETAILS_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    case LOAD_POST_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}