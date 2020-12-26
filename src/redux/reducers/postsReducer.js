import { } from '../../_variables/constants';

export const postsReducer = (state = false, action) => {
  switch (action.type) {
    case 12:
      return true;
    case 23:
      return false;
    default:
      return state;
  }
}