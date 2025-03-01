import axios from "axios";

// Provides AI-powered workforce sustainability analysis

/**
 * Calls AI model to analyze workforce sustainability.
 */
export const analyzeSustainability = async (workforceData) => {
  try {
    const response = await axios.post("http://localhost:5083/predict_sustainability", workforceData);
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce sustainability insights:", error);
    throw new Error("Failed to analyze workforce sustainability.");
  }
};
