import React from "react";
import ContextHeader from "./ContextHeader";
import ContextFooter from "./ContextFooter";
import ContextContent from "./ContextContent";

function ContextPage() {
  return (
    <div className="page">
      <ContextHeader />
      <ContextContent />
      <ContextFooter />
    </div>
  );
}

export default ContextPage;
