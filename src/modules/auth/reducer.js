import * as constants from './constants';

export const name = 'auth';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.USER_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case constants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
      };

    case constants.USER_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
