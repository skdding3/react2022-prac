import React, { useState } from "react";
import ContextPage from "./ContextPage";
import { ThemeContext } from "../context/ThemeContext";

function UseContextPrac() {
  const [isDark, setIsDark] = useState(false);

  return (
    // 프로바이더로 감싸준다
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ContextPage />
    </ThemeContext.Provider>
  );
}

export default UseContextPrac;
