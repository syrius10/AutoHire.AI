import axios from "axios";

/**
 * Fetches AI-powered internal job movement insights.
 */
export const fetchJobRotationRecommendations = async (
  employeeId,
  currentRole,
  skills,
  experience,
) => {
  try {
    const response = await axios.post("/api/internal-job-rotation/recommend", {
      employeeId,
      currentRole,
      skills,
      experience,
    });
    return response.data.recommendations;
  } catch (error) {
    console.error("Error fetching job rotation recommendations:", error);
    return [];
  }
};
