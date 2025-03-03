import axios from "axios";

// Fetches AI-powered HR policy adaptations & scheduling insights.

/**
 * Fetches AI-powered HR policy adaptations & scheduling insights.
 */
export const fetchHRPolicyRecommendations = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/emotion-aware-hr/policy");
    return response.data;
  } catch (error) {
    console.error("Error fetching HR policy recommendations:", error);
    return { recommendedPolicy: "Unable to retrieve data" };
  }
};
