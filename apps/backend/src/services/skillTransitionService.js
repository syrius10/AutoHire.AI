import axios from "axios";

/**
 * Calls AI model for skill transition analysis.
 */
export const getSkillTransitionPaths = async (employeeId, currentSkills, targetRole) => {
  try {
    const response = await axios.post("http://localhost:5071/analyze", {
      employeeId,
      currentSkills,
      targetRole,
    });

    return response.data.transitionPaths;
  } catch (error) {
    console.error("Error fetching skill transition paths:", error);
    throw new Error("Failed to analyze skill transitions.");
  }
};
