import { LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from '../../_variables/constants';

const initialState = {
  users: [],
  error: null,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case LOAD_USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}