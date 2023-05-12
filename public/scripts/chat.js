let socket = io();
let userName;

Swal.fire({
  title: "Write your name",
  input: "text",
  inputValidator: (value) => !value && "Please write your name",
  allowOutsideClick: false,
}).then((res) => {
  userName = res.value;
  document.getElementById("username").innerHTML = userName;
  socket.emit("auth", userName);
  //   console.log(userName);
});

const chatBox = document.getElementById("chatbox");
chatBox.addEventListener("keyup", send);

function send(e) {
  if (e.key == "Enter") {
    // console.log(chatBox.value);
    socket.emit("new_message", { userName, message: chatBox.value });
    chatBox.value = "";
    chatBox.focus();
  }
}

socket.on("all_messages", (data) => {
  document.getElementById("messageBlock").innerHTML = data
    .map((message) => `<br><b>${message.userName}</b>: ${message.message}`)
    .join("");
});
