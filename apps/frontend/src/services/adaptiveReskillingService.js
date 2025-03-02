import axios from "axios";

// Calls AI for personalized reskilling paths

/**
 * Fetch AI-powered reskilling recommendations.
 */
export const fetchReskillingRecommendation = async (reskillingData) => {
  try {
    const response = await axios.post("/api/adaptive-reskilling/recommend", reskillingData);
    return response.data;
  } catch (error) {
    console.error("Error fetching reskilling recommendation:", error);
    throw new Error("Failed to fetch AI-powered reskilling suggestions.");
  }
};
