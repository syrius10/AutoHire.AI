import axios from "axios";

// AI-driven collaboration insights

/**
 * Calls AI service for collaboration insights.
 */
export const getCollaborationInsights = async () => {
  try {
    const response = await axios.get("http://localhost:5105/collaboration-insights");
    return response.data;
  } catch (error) {
    console.error("Error fetching collaboration insights:", error);
    throw new Error("Failed to retrieve collaboration insights.");
  }
};
