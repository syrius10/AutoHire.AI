import axios from "axios";

// Fetches AI-driven DEI insights for workforce planning

/**
 * Calls AI model to analyze Diversity, Equity, and Inclusion (DEI).
 */
export const analyzeDEI = async (deiData) => {
  try {
    const response = await axios.post(
      "http://localhost:5082/predict_dei",
      deiData,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching DEI insights:", error);
    throw new Error("Failed to analyze DEI data.");
  }
};
