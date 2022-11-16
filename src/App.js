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
import LifeCycleSample from "./component/LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
