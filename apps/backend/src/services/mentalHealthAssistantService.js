import axios from "axios";

// AI-powered mental health chatbot service

/**
 * Calls AI-powered mental health assistant for chatbot responses.
 */
export const getMentalHealthResponse = async (message) => {
  try {
    const response = await axios.post("http://localhost:5074/chat", {
      user_message: message,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching mental health response:", error);
    throw new Error("Mental health chatbot is currently unavailable.");
  }
};
