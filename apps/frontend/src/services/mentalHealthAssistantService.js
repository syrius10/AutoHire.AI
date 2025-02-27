import axios from "axios";

// Calls AI chatbot for mental health support

/**
 * Calls AI-powered mental health assistant for chatbot responses.
 */
export const getMentalHealthResponse = async (message) => {
  try {
    const response = await axios.post("/api/mental-health", { message });
    return response.data;
  } catch (error) {
    console.error("Error fetching mental health response:", error);
    throw new Error("Mental health chatbot is currently unavailable.");
  }
};
