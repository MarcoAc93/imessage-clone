import { LOGIN, LOGOUT } from '../constants/redux';
const defaultState = {
  user: null
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default reducer;
