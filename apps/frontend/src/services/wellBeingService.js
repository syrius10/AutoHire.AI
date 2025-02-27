import axios from "axios";

// Fetches AI-powered well-being insights

/**
 * Fetch AI-driven personalized well-being recommendations.
 */
export const fetchWellBeingPlan = async () => {
  try {
    const response = await axios.get("/api/well-being");
    return response.data;
  } catch (error) {
    console.error("Error fetching well-being data:", error);
    throw new Error("Could not fetch well-being insights.");
  }
};
