import axios from "axios";

/**
 * Calls AI model to fetch internal job rotation recommendations.
 */
export const getJobRotationRecommendations = async (employeeId, currentRole, skills, experience) => {
  try {
    const response = await axios.post("http://localhost:5070/recommend", {
      employeeId,
      currentRole,
      skills,
      experience,
    });

    return response.data.recommendations;
  } catch (error) {
    console.error("Error fetching job rotation recommendations:", error);
    throw new Error("Failed to retrieve job rotation insights.");
  }
};
