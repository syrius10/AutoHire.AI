import axios from "axios";

/**
 * Calls the AI service to analyze employee sentiment and engagement
 */
export const analyzeEmployeeEngagement = async (data) => {
  try {
    const response = await axios.post("http://localhost:5035/predict_engagement", data);
    return response.data;
  } catch (error) {
    console.error("Error analyzing employee engagement:", error);
    return { engagementScore: "Unknown" };
  }
};
