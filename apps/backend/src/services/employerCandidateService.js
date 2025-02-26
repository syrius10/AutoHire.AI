import axios from "axios";

// Handles AI-powered employer-candidate communication.

/**
 * Calls AI chatbot model for employer-candidate conversation.
 */
export const chatWithAI = async (message) => {
  try {
    const response = await axios.post("http://localhost:5063/chat", { message });
    return response.data.response;
  } catch (error) {
    console.error("Error in AI chat:", error);
    throw new Error("Chat interaction failed.");
  }
};
