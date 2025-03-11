import axios from "axios";

/**
 * Calls the AI service to predict employee retention risk
 */
export const predictRetentionRisk = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5038/predict_retention",
      data,
    );
    return response.data;
  } catch (error) {
    console.error("Error predicting retention risk:", error);
    return { retentionRisk: "Unknown" };
  }
};
