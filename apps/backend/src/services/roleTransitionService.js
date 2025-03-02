import axios from "axios";

/**
 * Calls AI model for job role transition recommendations.
 */
export const getRoleTransitionRecommendations = async (data) => {
  try {
    const response = await axios.post("http://localhost:5104/role-transition", data);
    return response.data;
  } catch (error) {
    console.error("Error getting role transition recommendations:", error);
    throw new Error("Role transition recommendation failed.");
  }
};
