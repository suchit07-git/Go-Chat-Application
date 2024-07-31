import React, { Component } from "react";
import "./Message.css";

class Message extends Component {
    render() {
        const messages = this.props.messages.map((msg, index) => (
            <p key={index}>{msg.data}</p>
        ));
        return (
            <div className="messages">
                <h2>Messages</h2>
                {messages}
            </div>
        );
    }
}

export default Message;