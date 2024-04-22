import { useState, useEffect } from "react";
import axios from "axios";
import "./MessagesInterface.css";

const MessagesInterface = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://www.test.readychatai.com/data"
        );
        setMessages(response.data);
        console.log(response);
      } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="messages-container">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.bot_sender ? "bot" : "user"}`}
        >
          <div className="message-info">
            <span className="sender-name">{message.sender_name}</span>
            <span className="message-date">{message.message_date}</span>
          </div>
          <div className="message-text">{message.message_text}</div>
        </div>
      ))}
    </div>
  );
};

export default MessagesInterface;
