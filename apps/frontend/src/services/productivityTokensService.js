import axios from "axios";

// Fetches AI-powered tokenized work incentive tracking insights.

/**
 * Fetches AI-powered productivity token insights.
 */
export const fetchProductivityTokens = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5001/api/productivity-tokens/assign",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching productivity tokens:", error);
    return null;
  }
};
