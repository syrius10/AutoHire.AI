import axios from "axios";

// Retrieves AI-driven real-time wellness tracking & mental health insights.

/**
 * Fetches AI-powered real-time mental wellness tracking & recommendations.
 */
export const fetchWellnessTracking = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5001/api/wellness/track",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching wellness data:", error);
    return { wellnessScore: "Unavailable" };
  }
};
