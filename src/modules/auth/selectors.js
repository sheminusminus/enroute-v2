import { createSelector } from 'reselect';

const getIsAuth = (state) => state.auth.isAuthenticated;
const getIsFetching = (state) => state.auth.isFetching;

export const selectIsAuthenticated = createSelector(
  [getIsAuth],
  (isAuth) => isAuth,
);

export const selectIsFetching = createSelector(
  [getIsFetching],
  (fetching) => fetching,
);
