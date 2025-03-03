import axios from "axios";

/**
 * Fetches AI-driven bias detection & mitigation insights.
 */
export const fetchBiasAnalysis = async () => {
  try {
    const response = await axios.post("http://localhost:5001/api/bias-elimination/detect", {
      genderBias: 2,
      ageBias: 1,
      ethnicBias: 0,
      skillMatch: 85,
      hiringHistory: 5,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching bias analysis:", error);
    throw new Error("Failed to retrieve bias detection insights.");
  }
};
