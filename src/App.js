import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./component/ErrorBoundary";
import Info from "./component/Info";

class App extends Component {
  render() {
    return (
      <div>
        {/* 에러 바운더리로 감싸준다. */}
        <ErrorBoundary>
          <Info />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
