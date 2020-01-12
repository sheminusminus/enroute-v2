import { connect } from 'react-redux';

import * as selectors from '../selectors';
import { requestLogin } from '../actions';

import presenter from './presenter';

const mapStateToProps = (state) => ({
  isAuthenticated: selectors.selectIsAuthenticated(state),
  isFetching: selectors.selectIsFetching(state),
});

const mapDispatchToProps = {
  requestLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
