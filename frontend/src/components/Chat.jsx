import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import SidebarPractician from "./SidebarPractician";
import SidebarPatient from "./SidebarPatient";
import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages";

import "./styles/Chat.css";

let socket;

const Chat = ({ location }) => {
  let { type, name, room } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    //const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="App">
      <div className="aside">
        {type === "practician" ? (
          <SidebarPractician />
        ) : (
          <SidebarPatient name={name} />
        )}
      </div>
      <div className="content">
        <div className="outerContainer">
          <div className="container">
            <InfoBar room={room} type={type} />
            <Messages messages={messages} name={name} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
