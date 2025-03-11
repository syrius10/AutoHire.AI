import axios from "axios";

/**
 * Calls AI engagement analysis API.
 */
export const analyzeEngagement = async (
  feedback,
  workload,
  teamSatisfaction,
  careerGrowth,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5073/predict_engagement",
      {
        feedback,
        workload_score: workload,
        team_satisfaction: teamSatisfaction,
        career_growth: careerGrowth,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error analyzing employee engagement:", error);
    throw new Error("Engagement analysis failed.");
  }
};
