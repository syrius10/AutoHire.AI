import axios from "axios";

// Sends messages to AI-powered HR chatbot

export const sendHRChatMessage = async (message) => {
  try {
    const response = await axios.post("/api/hr-chatbot/query", { message });
    return response.data;
  } catch (error) {
    console.error("Error in HR chatbot interaction:", error);
    throw error;
  }
};
