import axios from "axios";

// Calls AI model to optimize employee work schedules dynamically.

export const optimizeWorkSchedule = async (workload, preferredHours, energyLevel) => {
  try {
    const response = await axios.post("http://localhost:5128/optimize_schedule", {
      workload,
      preferred_hours: preferredHours,
      energy_level: energyLevel,
    });

    return response.data;
  } catch (error) {
    console.error("Error optimizing work schedule:", error);
    throw new Error("Failed to optimize work schedule.");
  }
};
