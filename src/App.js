import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import { nanoid } from "nanoid";
import SingInChatForm from "./components/SingInChatForm";
import Chat from "./components/Chat";
import ChatForm from "./components/ChatForm";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function App() {
  const [nickname, setNikeName] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("chat-message", (message) => {
      setMessages((prevState) => {
        const newMessage = {
          id: nanoid(),
          type: "",
          message,
        };
        return [newMessage, ...prevState];
      });
    });
  }, []);

  const addNikeName = useCallback(
    ({ name }) => setNikeName(name),
    [setNikeName]
  );
  const addMessage = useCallback(
    ({ message }) => {
      setMessages((prevState) => {
        const newMessage = {
          id: nanoid(),
          type: "",
          message,
        };
        return [newMessage, ...prevState];
      }),
        socket.emit("chat-message", message);
    },
    [setMessages]
  );

  return (
    <div className="App">
      {!nickname && <SingInChatForm onSubmit={addNikeName} />}
      {nickname && <ChatForm onSubmit={addMessage} />}
      {nickname && <Chat items={messages} nickname={nickname} />}
    </div>
  );
}

export default App;
