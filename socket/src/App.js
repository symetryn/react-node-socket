import React, { Component } from "react";
import { io } from "socket.io-client";

class App extends Component {
  componentDidMount() {
    const socket = io("http://localhost:8080");
    console.log(socket);
    socket.emit("test_msg", "Hello from client");
  }
  render() {
    return <div>App</div>;
  }
}

export default App;
