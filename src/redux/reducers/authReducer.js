import { AUTH_FAIL, AUTH_SUCCESS, LOGOUT } from "../actions/actionTypes";

const initialState = {
  isAuth: false,
  loading: true,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload,
      };
    case AUTH_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
