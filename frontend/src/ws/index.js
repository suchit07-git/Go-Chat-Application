var socket = new WebSocket("ws://localhost:4000/ws");
let connect = cb => {
	console.log("Attempting to make a connection...");
	socket.onopen = () => {
		console.log("Successfully connected");
	};
	socket.onmessage = msg => {
		console.log(msg);
		cb(msg);
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