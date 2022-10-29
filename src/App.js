import React, { Component } from "react";
import "./App.css";
import ScrollBox from "./component/ScrollBox";
// import EventPractice from "./component/EventPractice";
// import Counter from "./component/Counter";
// import ValidationSample from "./component/ValidationSample";
// import RefSample from "./component/RefSample";
// import Say from "./component/Say";
// import MyComponent from "./MyComponent";

class App extends Component {
  render() {
    return (
      <div>
        {/*컴포넌트 ref*/}
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          최하단으로 이동
        </button>
      </div>
    );
  }
}

export default App;
