import React from "react";
import ContextHeader from "./ContextHeader";
import ContextFooter from "./ContextFooter";
import ContextContent from "./ContextContent";

function ContextPage({ isDark, setIsDark }) {
  return (
    <div className="page">
      <ContextHeader isDark={isDark} />
      <ContextContent isDark={isDark} />
      <ContextFooter isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default ContextPage;
