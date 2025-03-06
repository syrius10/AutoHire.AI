import axios from "axios";

// Fetches AI-driven work schedule optimization insights.

export const fetchOptimizedSchedule = async (workload, preferredHours, energyLevel) => {
  try {
    const response = await axios.post("/api/work-schedule/optimize", {
      workload,
      preferredHours,
      energyLevel,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching optimized schedule:", error);
    return { optimizedSchedule: "Error fetching schedule" };
  }
};
