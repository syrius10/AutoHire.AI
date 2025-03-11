import axios from "axios";

/**
 * Fetches AI-powered employee engagement score.
 */
export const analyzeEngagement = async (
  feedback,
  workload,
  teamSatisfaction,
  careerGrowth,
) => {
  try {
    const response = await axios.post("/api/employee-engagement/analyze", {
      feedback,
      workload,
      teamSatisfaction,
      careerGrowth,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching engagement analysis:", error);
    throw new Error("Failed to analyze engagement.");
  }
};
