import axios from "axios";

// Provides AI-powered Workload Optimization

/**
 * Optimizes workload distribution to prevent burnout.
 */
export const optimizeWorkload = async (employeeId, currentWorkload, efficiency, burnoutScore) => {
  try {
    const response = await axios.post("http://localhost:5110/optimize", {
      employeeId,
      currentWorkload,
      efficiency,
      burnoutScore,
    });

    return response.data;
  } catch (error) {
    console.error("Error in workload optimization:", error);
    throw new Error("Workload optimization failed.");
  }
};
