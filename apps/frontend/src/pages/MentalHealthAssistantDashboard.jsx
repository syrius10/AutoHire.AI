import { useState } from "react";
import { getMentalHealthResponse } from "../services/mentalHealthAssistantService";

// Real-time AI chatbot for mental health support

export default function MentalHealthAssistantDashboard() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    const aiResponse = await getMentalHealthResponse(message);
    setResponse(aiResponse);
    setMessage("");
  };

  return (
    <div>
      <h1>Mental Health Assistant</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your concern..."
      />
      <button onClick={handleSendMessage}>Send</button>
      {response && <p>AI Response: {response.message}</p>}
    </div>
  );
}
