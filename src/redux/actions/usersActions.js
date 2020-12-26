import { LOAD_USERS_ERROR, LOAD_USERS_SUCCESS } from '../../_variables/constants';
import * as api from '../../api/api';
import * as loadingActions from './loadingActions';


export const usersLoadError = (error) => ({
  type: LOAD_USERS_ERROR,
  payload: error,
});

export const usersLoadSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
})

export const loadUsersThunk = () => async (dispatch) => {
  dispatch(loadingActions.startLoading());
  try {
    const users = await api.getUsers();
    console.log(users);
    dispatch(usersLoadSuccess(users));
  } catch (error) {
    dispatch(usersLoadError(error));
  }
  dispatch(loadingActions.stopLoading());
}
