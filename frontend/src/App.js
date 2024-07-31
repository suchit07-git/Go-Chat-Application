import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./ws/index.js";
import Header from "./components/Header/Header.jsx";
import Message from "./components/Messages/Message.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: []
		}
	}
	componentDidMount() {
		connect((msg) => {
			console.log("New message");
			this.setState(prevState => ({
				messages: [...this.state.messages, msg]
			}))
		});
	}
	send() {
		console.log("Hello from client!");
		sendMsg("Hello from client!");
	}
	render() {
		return (
			<div className="App">
				<Header />
				<Message messages={this.state.messages} />
				<button onClick={this.send}>Hit</button>
			</div>
		);
	}
}

export default App;