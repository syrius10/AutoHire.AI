import axios from "axios";

// Fetches AI-powered international hiring recommendations.

/**
 * Calls backend API to fetch AI-powered hiring recommendations.
 */
export const fetchHiringRecommendations = async (params) => {
  try {
    const response = await axios.post("/api/global-hiring/recommendations", params);
    return response.data;
  } catch (error) {
    console.error("Error fetching hiring recommendations:", error);
    throw new Error("Failed to fetch hiring recommendations.");
  }
};
