import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4500");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    socket.emit("send_message", { message });
    setChat((prev) => [...prev, { message }]);
    setMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });
  }, [socket]);

  return (
    <>
      <div className="app">
        <input
          type="text"
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => sendMessage()}>Send</button>
      </div>
      <div className="chat">
        {chat.map((msg, index) => (
          <p key={index}>{msg.message}</p>
        ))}
      </div>
    </>
  );
}

export default App;
