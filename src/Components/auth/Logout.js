import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGOUT, ALERT } from "../../redux/actions/actionTypes";

export default function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch({
      type: LOGOUT,
    });
    dispatch({
      type: ALERT,
      payload: { success: "Logout Success" },
    });
    history.push("/login");
  });
  return <div></div>;
}
