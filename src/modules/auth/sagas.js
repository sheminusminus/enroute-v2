import {
  call, fork, put, take,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as actions from './actions';
import * as api from './api';

import { USER_LOGIN_REQUEST } from './constants';

/**
 *  requestLogin
 *
 *  Generator function to handle the USER_LOGIN_REQUEST action
 *  Takes a username and password from the action payload and passes it to
 *  the requestLogin call in api.js
 *
 *  Calls the appropriate action, given the api call response
 *
 *  @param username {string}
 *  @param password {string}
 */
function* requestLogin(username, password) {
  try {
    const response = yield call(api.requestLogin, username, password);

    if (response.error) {
      yield put(actions.loginFailure(response.error));
    } else {
      const { data } = response.data;
      yield call(delay, 2000);
      yield put(actions.loginSuccess(data));
    }
  } catch (error) {
    yield put(actions.loginFailure(error));
  }
}

/**
 *  Generator function to listen for redux actions
 *
 *  Handles any action api requests as non-blocking calls and
 *    returns the appropriate action responses
 */
function* watch() {
  while (true) {
    const { type, payload = {} } = yield take([
      USER_LOGIN_REQUEST,
    ]);

    switch (type) {
      case USER_LOGIN_REQUEST:
        yield fork(requestLogin, payload.username, payload.password);
        break;
      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
