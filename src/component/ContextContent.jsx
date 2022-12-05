import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContextContent = () => {
  const { isDark } = useContext(ThemeContext);
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
