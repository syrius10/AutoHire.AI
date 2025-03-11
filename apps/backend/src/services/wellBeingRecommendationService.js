import axios from "axios";

/**
 * Calls the AI service to provide well-being recommendations
 */
export const getWellBeingRecommendations = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5037/recommend_wellbeing",
      data,
    );
    return response.data;
  } catch (error) {
    console.error("Error getting well-being recommendations:", error);
    return { recommendation: "Unknown" };
  }
};
