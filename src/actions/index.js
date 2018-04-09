import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
 } from './types';

const API_URL = 'http://localhost:3090';

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password });
  }
}

export function signinUser({ email, password }) {
  // redux-thunk give us access to dispatch
  return function(dispatch) {
    //  submit email and password to the server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        // if req is good:
        // - update state to indicate user is auth'd
        dispatch({ type: AUTH_USER });
        // - save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // if req is bad:
        // - show error to the user
        dispatch(authError('Bad login info'));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER
  }
}
