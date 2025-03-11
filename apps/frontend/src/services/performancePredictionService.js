import axios from "axios";

// Calls AI for employee performance predictions

/**
 * Fetch AI-powered employee performance predictions.
 */
export const fetchPerformancePrediction = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5001/api/performance-prediction/predict",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching performance prediction:", error);
    return { error: "Failed to load performance data." };
  }
};
