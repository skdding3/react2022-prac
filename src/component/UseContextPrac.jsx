import React, { useState } from "react";
import ContextPage from "./ContextPage";

function UseContextPrac() {
  const [isDark, setIsDark] = useState(false);

  return <ContextPage isDark={isDark} setIsDark={setIsDark} />;
}

export default UseContextPrac;
