import axios from "axios";

// AI HR chatbot

/**
 * Calls AI-powered HR chatbot for real-time employee queries.
 */
export const handleHRChatQuery = async (message) => {
  try {
    const response = await axios.post("http://localhost:5037/hr_chat", {
      message,
    });
    return response.data;
  } catch (error) {
    console.error("Error in HR chatbot:", error);
    throw new Error("HR chatbot response failed.");
  }
};
