import React from "react";

const ContextHeader = ({ isDark }) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>어서와 선기야!</h1>
    </header>
  );
};

export default ContextHeader;
