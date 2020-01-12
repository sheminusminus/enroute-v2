import axios from 'axios';

export async function requestLogin(username, password) {
  const path = '/api/auth';
  const data = {
    username,
    password,
  };

  return axios.post(path, data);
}
