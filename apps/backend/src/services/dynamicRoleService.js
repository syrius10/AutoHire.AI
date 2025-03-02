import axios from "axios";

// AI-driven role optimization

/**
 * Calls AI model to optimize employee job roles.
 */
export const optimizeRole = async (performance, experience, skillLevel, adaptability) => {
  try {
    const response = await axios.post("http://localhost:5099/role-optimization", {
      performance,
      experience,
      skillLevel,
      adaptability,
    });
    return response.data.optimizedRole;
  } catch (error) {
    console.error("Error in role optimization:", error);
    throw new Error("Role optimization failed.");
  }
};
