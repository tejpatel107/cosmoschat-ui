// Create a new WebSocket
const socket = new WebSocket('http://localhost:3000');

// Event listener for when the connection is established
socket.onopen = function(event) {
  console.log('WebSocket connection established');
};

// Event listener for when a message is received
socket.onmessage = function(event) {
  console.log('Message received: ' + event.data);
};

// Event listener for when the connection is closed
socket.onclose = function(event) {
  console.log('WebSocket connection closed');
};

// Send a message
function sendMessage(message) {
  socket.send(message);
}