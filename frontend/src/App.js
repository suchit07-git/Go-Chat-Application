import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./ws/index.js";

class App extends Component {
	constructor(props) {
		super(props);
		connect();
	}
	send() {
		console.log("Hello from client!");
		sendMsg("Hello from client!");
	}
	render() {
		return (
			<div className="App">
				<button onClick={this.send}>Hit</button>
			</div>
		);
	}
}

export default App;