import axios from "axios";

// Fetches AI-driven workforce economic predictions.

/**
 * Calls AI service to fetch workforce economic predictions.
 */
export const fetchEconomicWorkforceData = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/economic-workforce/forecast");
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce economic data:", error);
    return { error: "Failed to fetch workforce predictions." };
  }
};
