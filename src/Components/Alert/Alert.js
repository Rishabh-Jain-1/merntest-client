import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Loader from "./Loader";
// import Loading from "./Loading";
import Toast from "./Toast";

const Alert = () => {
  const { alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {alert.loading && <Loader active={true} />}

      <Toast />
    </div>
  );
};

export default Alert;
