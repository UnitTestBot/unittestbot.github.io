import React from "react";

const Wrapper = ({ children, doc }) => {
  return (
    <div
      className="wraaaper"
      style={{
        fontSize: "1rem",
        fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
