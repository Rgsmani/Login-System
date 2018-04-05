import { SIGNUP, LOGIN } from '../constants/contant';

const initialState = {
  user: {
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    gender: '',
    country: '',
  },
  users: [],
  userLogged: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      {
        const { user } = action;
        state.users.push(user);

        return { ...state, users: [...state.users, user] };
      }
    case LOGIN:

      return { ...state, userLogged: !state.userLogged };

    default:
      return state;
  }
};