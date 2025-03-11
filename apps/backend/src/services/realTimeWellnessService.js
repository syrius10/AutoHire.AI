import axios from "axios";

// Provides AI-powered mental health tracking & wellness reports.

/**
 * Calls AI model for real-time mental wellness tracking & recommendations.
 */
export const trackWellness = async (
  stressLevel,
  sleepHours,
  workHours,
  workload,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5114/predict-wellness",
      {
        stressLevel,
        sleepHours,
        workHours,
        workload,
      },
    );
    return response.data.wellnessScore;
  } catch (error) {
    console.error("Error tracking wellness:", error);
    throw new Error("Failed to track wellness.");
  }
};
