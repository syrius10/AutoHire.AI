import axios from "axios";

// AI-powered role transitions

/**
 * Calls AI model to suggest job role transitions.
 */
export const suggestRoleTransition = async (roleLevel, skillMatch, jobDemand, growthPotential) => {
  try {
    const response = await axios.post("http://localhost:5100/role-transition", {
      roleLevel,
      skillMatch,
      jobDemand,
      growthPotential,
    });
    return response.data.transitionSuggestion;
  } catch (error) {
    console.error("Error in role transition suggestion:", error);
    throw new Error("Role transition recommendation failed.");
  }
};
