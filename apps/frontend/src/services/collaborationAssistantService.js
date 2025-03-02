import axios from "axios";

// Fetches AI-powered workforce collaboration insights

/**
 * Calls AI service for collaboration insights.
 */
export const fetchCollaborationInsights = async () => {
  try {
    const response = await axios.get("/api/collaboration-assistant/insights");
    return response.data;
  } catch (error) {
    console.error("Error fetching collaboration insights:", error);
    throw new Error("Failed to retrieve collaboration insights.");
  }
};
