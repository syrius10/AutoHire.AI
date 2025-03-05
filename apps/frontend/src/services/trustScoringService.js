import axios from "axios";

// Handles API calls for AI-powered trust score calculations.

/**
 * Calls AI model to fetch trust score for a freelancer or employer.
 */
export const fetchTrustScore = async (userId) => {
  try {
    const response = await axios.post("http://localhost:5001/api/trust-scoring/calculate", { userId });
    return response.data;
  } catch (error) {
    console.error("Error fetching trust score:", error);
    return { error: "Failed to calculate trust score" };
  }
};
