import React from "react";
import { useSelector } from "react-redux";

import Loader from "./Loader";
import Toast from "./Toast";

const Alert = () => {
  const { alert } = useSelector((state) => state);
  return (
    <div>
      {alert.loading && <Loader active={true} />}

      <Toast />
    </div>
  );
};

export default Alert;
