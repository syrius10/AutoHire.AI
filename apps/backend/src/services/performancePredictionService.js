import axios from "axios";

// Provides AI-driven employee performance forecasting

/**
 * Calls AI model to predict employee performance.
 */
export const predictEmployeePerformance = async (workHours, completionRate, experience) => {
  try {
    const response = await axios.post("http://localhost:5108/performance-prediction", {
      workHours,
      completionRate,
      experience,
    });
    return response.data;
  } catch (error) {
    console.error("Error predicting performance:", error);
    throw new Error("Performance prediction failed.");
  }
};
