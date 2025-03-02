import axios from "axios";

// Retrieves AI-generated career transition recommendations

/**
 * Fetch AI-powered role transition insights.
 */
export const fetchRoleTransition = async (transitionData) => {
  try {
    const response = await axios.post("/api/role-transition/suggest", transitionData);
    return response.data;
  } catch (error) {
    console.error("Error fetching role transition recommendation:", error);
    throw new Error("Failed to fetch AI-driven career transition insights.");
  }
};
