import axios from "axios";

/**
 * Calls AI model for job role optimization.
 */
export const optimizeJobRole = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5103/role-optimization",
      data,
    );
    return response.data;
  } catch (error) {
    console.error("Error optimizing job role:", error);
    throw new Error("Job role optimization failed.");
  }
};
