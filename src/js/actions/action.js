import { SIGNUP, LOGIN } from '../constants/contant';

export function signup(user) {
  return {
    type: SIGNUP,
    user
  };
}

export function login(loginval) {
  return {
    type: LOGIN,
    login: loginval
  };
}