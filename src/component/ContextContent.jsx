import React from "react";

const ContextContent = ({ isDark }) => {
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>선기야 좋은 하루!</p>
    </div>
  );
};

export default ContextContent;
