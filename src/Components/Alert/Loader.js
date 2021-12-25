import React, { Children } from "react";
import LoadingOverlay from "react-loading-overlay";
import { useSelector } from "react-redux";
import "./css/loader.styles.css";
const Loader = ({ active, children }) => {
  const { alert } = useSelector((state) => state);
  return (
    <LoadingOverlay
      active={active}
      spinner
      styles={{
        spinner: (base) => ({
          ...base,
          width: "100%",
          "& svg circle": {
            stroke: "rgba(0, 0, 0, 0.5)",
          },
        }),
        wrapper: {
          width: "100%",
          height: "auto",
          overflow: "hidden",
        },
      }}
      // className=".overlay"
      text="Please wait"
    >
      <div>{children}</div>
    </LoadingOverlay>
  );
};

export default Loader;
