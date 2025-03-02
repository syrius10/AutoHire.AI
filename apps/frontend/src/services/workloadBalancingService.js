import axios from "axios";

// Calls AI for Workload Optimization

/**
 * Fetches AI-powered workload optimization insights.
 */
export const fetchWorkloadOptimization = async (employeeId) => {
  try {
    const response = await axios.post("http://localhost:5001/api/workload-balancing/optimize", {
      employeeId,
      currentWorkload: 8, // Example workload
      efficiency: 75,
      burnoutScore: 60,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching workload balancing data:", error);
    return { error: "Failed to fetch workload optimization insights." };
  }
};
