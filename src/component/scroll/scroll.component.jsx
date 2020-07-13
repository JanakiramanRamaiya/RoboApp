import React from "react";

const Scroll = ({ children }) => {
  return <div style={{ height: "80vh", overflowY: "scroll" }}>{children}</div>;
};

export default Scroll;
