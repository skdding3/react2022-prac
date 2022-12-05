import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContextHeader = () => {
  const { isDark } = useContext(ThemeContext);

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
