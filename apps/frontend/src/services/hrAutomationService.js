import axios from "axios";

// Fetches AI-driven HR automation insights.

/**
 * Fetch AI-powered HR automation insights.
 */
export const fetchHRAutomationInsights = async () => {
  try {
    const response = await axios.get("/api/hr-automation/process");
    return response.data;
  } catch (error) {
    console.error("Error fetching HR automation insights:", error);
    return { error: "Failed to load HR automation insights." };
  }
};
