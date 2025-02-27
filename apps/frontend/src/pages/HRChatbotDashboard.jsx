import React, { useState } from "react";
import { sendHRChatMessage } from "../services/hrChatbotService";

// AI-powered HR chatbot interface

export default function HRChatbotDashboard() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSendMessage = async () => {
    try {
      const chatResponse = await sendHRChatMessage(message);
      setResponse(chatResponse.response);
    } catch (error) {
      console.error("Error sending HR chatbot message:", error);
    }
  };

  return (
    <div>
      <h2>HR Chatbot</h2>
      <input
        type="text"
        placeholder="Ask a question..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
      {response && <p>Chatbot: {response}</p>}
    </div>
  );
}
