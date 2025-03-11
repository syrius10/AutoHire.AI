import axios from "axios";

// Retrieves AI-powered employer-employee economic models.

/**
 * Calls AI service to fetch economic forecast for employer-employee trends.
 */
export const fetchEconomicForecast = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5001/api/economic-forecast/predict",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching economic forecast:", error);
    return { error: "Failed to fetch economic forecast." };
  }
};
