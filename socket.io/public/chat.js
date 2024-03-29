let socket = io.connect("http://192.168.1.13:5050");

var message = document.getElementById("message");
var button = document.getElementById("send");
var username = document.getElementById("username");
var output = document.getElementById("output");

button.addEventListener("click", function () {
  socket.emit("sendingMessage", {
    message: message.value,
    username: username.value,
  });
});

socket.on("broadcastMessage", function (data) {
  output.innerHTML +=
    "<p><strong>" + data.username + ": </strong>" + data.message + "</p>";
});
