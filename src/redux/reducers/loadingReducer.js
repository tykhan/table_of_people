import { START_SPINNER, STOP_SPINNER } from '../../_variables/constants';

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case START_SPINNER:
      return true;
    case STOP_SPINNER:
      return false;
    default:
      return state;
  }
}
