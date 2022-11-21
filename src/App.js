import React, { Component } from "react";
import "./App.css";
// import ScrollBox from "./component/ScrollBox";
// import EventPractice from "./component/EventPractice";
// import Counter from "./component/Counter";
// import ValidationSample from "./component/ValidationSample";
// import RefSample from "./component/RefSample";
// import Say from "./component/Say";
// import MyComponent from "./MyComponent";
// import IterationSample from "./component/iterationSample";
// import LifeCycleSample from "./component/LifeCycleSample";
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
