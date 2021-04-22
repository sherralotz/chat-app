import "./App.css";
import Header from "./components/Header";
import MessageArea from "./components/MessageArea";
import React from "react";
import "font-awesome/css/font-awesome.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLightMode: false,
      messageList: [],
    };
    this.changeColorMode = this.changeColorMode.bind(this);
  }

  changeColorMode() {
    this.setState((prevState) => {
      return { isLightMode: !prevState.isLightMode };
    });
    console.log("B", this.state);
  }

  render() {
    const colorMode = this.state.isLightMode ? "lightmode" : "darkmode";
    return (
      <div className={`app-container ${colorMode}`}>
        <div className="main-container">
          <Header changeColorMode={this.changeColorMode} />
          <MessageArea />
        </div>
      </div>
    );
  }
}

export default App;
