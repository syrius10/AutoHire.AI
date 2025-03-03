import axios from "axios";

// Calls AI for hiring trends & job role forecasting.

/**
 * Calls AI service to fetch hiring trends & job market insights.
 */
export const fetchGlobalHiringTrends = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/global-hiring-trends/analyze");
    return response.data;
  } catch (error) {
    console.error("Error fetching global hiring trends:", error);
    return { error: "Failed to fetch hiring trends." };
  }
};
