import axios from "axios";

// Displays AI-powered work assistant insights.

export const fetchAIWorkAssistant = async () => {
  try {
    const response = await axios.get("/api/ai-work-assistant/data");
    return response.data;
  } catch (error) {
    console.error("Error fetching AI work assistant data:", error);
    return null;
  }
};
