import React, { useState, Component } from "react";
import Navbar from "./component/Navbar";
import Router from "./Router/Router";
import "./component/css/main.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
