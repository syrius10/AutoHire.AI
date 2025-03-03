import axios from "axios";

/**
 * Calls backend API for ethical hiring bias detection.
 */
export const evaluateHiring = async (hiringData) => {
  try {
    const response = await axios.post("/api/ethical-hiring/evaluate", hiringData);
    return response.data;
  } catch (error) {
    console.error("Error fetching ethical hiring evaluation:", error);
    throw error;
  }
};
