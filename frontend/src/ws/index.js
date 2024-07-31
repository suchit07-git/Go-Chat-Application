var socket = new WebSocket("ws://localhost:8080/ws");
let connect = () => {
	console.log("Attempting to make a connection...");
	socket.onopen = () => {
		console.log("Successfully connected");
	};
	socket.onmessage = msg => {
		console.log(msg);
	};
	socket.onclose = e => {
		console.log("Socket connection closed: ", e);
	};
	socket.onerror = error => {
		console.log("Socket error: ", error);	
	};
};

let sendMsg = msg => {
	console.log("Sending message: ", msg);
	socket.send(msg);
};

export { connect, sendMsg };