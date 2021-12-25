import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toast = () => {
  const { alert } = useSelector((state) => state);

  alert.success &&
    toast.success(alert.success, {
      toastId: "unique-random-text-xAu9C9-",
      position: "bottom-left",
    });
  alert.error &&
    toast.error(alert.error, {
      toastId: "unique-random-text-xAu9C9-",
      position: "bottom-left",
    });
  alert.info &&
    toast.info(alert.info, {
      toastId: "unique-random-text-xAu9C9-",
      position: "bottom-left",
    });

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
