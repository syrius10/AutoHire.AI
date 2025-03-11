import axios from "axios";

// Manages AI-powered talent mobility insights.

/**
 * Fetch internal mobility suggestions for employees.
 */
export const getTalentMobilityInsights = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5032/talent-mobility-insights",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching talent mobility insights:", error);
    throw new Error("Failed to retrieve talent mobility data.");
  }
};
