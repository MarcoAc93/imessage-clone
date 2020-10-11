import { LOGIN, LOGOUT } from '../constants/redux';
import { auth } from '../firebase';

const loginAction = payload => ({ type: LOGIN, payload });

const logoutAction = () => ({ type: LOGOUT });

export const login = user => {
  return dispatch => {
    dispatch(loginAction(user));
  }
}

export const logout = user => {
  return dispatch => {
    auth.signOut()
    .then(() => {
        dispatch(logoutAction(user));
      })
      .catch(error => { console.log(error); })
  }
}
