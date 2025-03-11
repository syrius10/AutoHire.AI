import axios from "axios";

/**
 * Retrieves AI-driven skill transition tracking insights.
 */
export const fetchSkillTransitionPaths = async (
  employeeId,
  currentSkills,
  targetRole,
) => {
  try {
    const response = await axios.post("/api/skill-transition/analyze", {
      employeeId,
      currentSkills,
      targetRole,
    });
    return response.data.transitionPaths;
  } catch (error) {
    console.error("Error fetching skill transition paths:", error);
    return [];
  }
};
