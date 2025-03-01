import axios from "axios";

// Retrieves AI-driven hiring bias detection & ethical recruitment reports

/**
 * Fetches AI-driven hiring bias detection insights.
 */
export const fetchEthicalHiringReport = async () => {
  try {
    const response = await axios.post("/api/ethical-hiring/detect");
    return response.data;
  } catch (error) {
    console.error("Error fetching ethical hiring insights:", error);
    throw new Error("Failed to retrieve ethical hiring data.");
  }
};
