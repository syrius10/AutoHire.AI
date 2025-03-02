import axios from "axios";

// Fetches AI-powered leadership training recommendations.

/**
 * Fetch AI-powered leadership training recommendations.
 */
export const fetchLeadershipTraining = async (experience, courses, performance) => {
  try {
    const response = await axios.post("/api/leadership-training/recommend", {
      experience,
      courses,
      performance,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching leadership training recommendations:", error);
    throw new Error("Leadership training data retrieval failed.");
  }
};
