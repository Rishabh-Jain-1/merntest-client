import { getDataAPI, postDataAPI } from "../../utils/apiWrapper";
import { ALERT, GET_EVENTS } from "./actionTypes";
export const getEventList = () => async (dispatch) => {
  try {
    dispatch({
      type: ALERT,
      payload: { loading: true },
    });
    const response = await getDataAPI("event/list");
    dispatch({
      type: GET_EVENTS,
      payload: response.data.results,
    });
    dispatch({
      type: ALERT,
      payload: { loading: false },
    });
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.message },
    });
  }
};

export const createEvent = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ALERT,
      payload: { loading: true },
    });
    const response = await postDataAPI("event/create", data);
    if (response.results) {
      return true;
    }
    dispatch({
      type: ALERT,
      payload: { success: response.data.message },
    });
    dispatch({
      type: ALERT,
      payload: { loading: false },
    });
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: { error: error.response.data.message },
    });
  }
};
