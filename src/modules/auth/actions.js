import * as constants from './constants';

export function requestLogin(username, password) {
  return {
    type: constants.USER_LOGIN_REQUEST,
    payload: {
      username,
      password,
    },
  };
}

export function loginSuccess(payload) {
  return {
    type: constants.USER_LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure(error) {
  return {
    type: constants.USER_LOGIN_FAILURE,
    payload: error,
  };
}
