import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./ws/index.js";
import Header from "./components/Header/Header.jsx";
import ChatHistory from "./components/ChatHistory/ChatHistory.jsx";
import ChatInput from "./components/ChatInput/ChatInput.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatHistory: []
		}
	}
	componentDidMount() {
		connect((msg) => {
			console.log("New Message")
			this.setState(prevState => ({
				chatHistory: [...this.state.chatHistory, msg]
			}))
			console.log(this.state);
		});
	}
	send(e) {
		if (e.keyCode === 13) {
			sendMsg(e.target.value);
			e.target.value = "";
		}
	}
	render() {
		return (
			<div className="App">
				<Header />
				<ChatHistory chatHistory={this.state.chatHistory} />
				<ChatInput send={this.send} />
			</div>
		);
	}
}

export default App;