import { getDataAPI, postDataAPI } from "../../utils/apiWrapper";
import { AUTH_FAIL, AUTH_SUCCESS, ALERT } from "./actionTypes";

export const login = (data) => async (dispatch) => {
  try {
    const response = await postDataAPI("login", data);
    localStorage.setItem("token", response.data.access_token);
    dispatch({
      type: ALERT,
      payload: { success: response.data.message },
    });
    dispatch({
      type: AUTH_SUCCESS,
      payload: response.data.user,
    });
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.message },
    });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ALERT,
      payload: { loading: true },
    });
    const response = await postDataAPI("register", data);
    localStorage.setItem("token", response.data.token);
    dispatch({
      type: AUTH_SUCCESS,
      payload: response.data.user,
    });
    dispatch({
      type: ALERT,
      payload: { loading: false },
    });
    dispatch({
      type: ALERT,
      payload: { success: response.data.message },
    });
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.message },
    });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const response = await getDataAPI("getuser");
    dispatch({
      type: AUTH_SUCCESS,
      payload: response.data.results,
    });
    dispatch({
      type: ALERT,
      payload: { success: response.data.message },
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
    });
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.message },
    });
  }
};
