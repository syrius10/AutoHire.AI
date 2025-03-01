import axios from "axios";

// Calls AI for workforce sustainability optimization

/**
 * Fetches AI-driven workforce sustainability data.
 */
export const fetchSustainabilityReport = async () => {
  try {
    const response = await axios.post("/api/sustainable-workforce/analyze");
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce sustainability insights:", error);
    throw new Error("Failed to retrieve workforce sustainability data.");
  }
};
