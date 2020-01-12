import React from 'react';

import propTypes from './prop-types';
import defaultProps from './default-props';
import styles from './styles.css';

class UserAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.bindCallbacks();
  }

  bindCallbacks() {
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(evt) {
    this.setState({
      username: evt.target.value,
    });
  }

  handlePassword(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  handleSubmit(evt) {
    const { requestLogin } = this.props;
    const { username, password } = this.state;

    if (evt) evt.preventDefault();

    requestLogin(username, password);
  }

  renderLoginForm() {
    const { isFetching, isAuthenticated } = this.props;
    const { username, password } = this.state;

    if (isFetching) return <p>Bypassing security protocols...</p>;
    if (isAuthenticated) return <p>Welcome!</p>;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={username} onChange={this.handleUsername} />
        <input type="password" value={password} onChange={this.handlePassword} />
        <input type="submit" value="Go" />
      </form>
    );
  }

  render() {
    const { isAuthenticated } = this.props;

    const form = this.renderLoginForm();

    return (
      <div className={styles.userAuth}>
        <h4>
          { isAuthenticated ? 'Hurray!' : 'Login Here :)' }
        </h4>
        {form}
      </div>
    );
  }
}

UserAuth.propTypes = propTypes;

UserAuth.defaultProps = defaultProps;

export default UserAuth;
