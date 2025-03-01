import axios from "axios";

// Fetches AI-powered DEI insights

/**
 * Fetches AI-driven DEI analytics from backend.
 */
export const fetchDEIAnalytics = async () => {
  try {
    const response = await axios.post("/api/dei-analytics/analyze");
    return response.data;
  } catch (error) {
    console.error("Error fetching DEI analytics:", error);
    throw new Error("Failed to retrieve DEI insights.");
  }
};
