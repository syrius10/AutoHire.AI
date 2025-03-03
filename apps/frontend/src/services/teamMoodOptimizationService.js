import axios from "axios";

// Calls AI for sentiment-based team collaboration improvement.

/**
 * Fetches AI-powered team sentiment analysis & collaboration recommendations.
 */
export const fetchTeamMoodOptimization = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/team-mood/optimize");
    return response.data;
  } catch (error) {
    console.error("Error fetching team mood insights:", error);
    return { teamMoodOptimization: "Unable to retrieve data" };
  }
};
