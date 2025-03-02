import axios from "axios";

// Fetches AI-powered HR workflow automation insights

/**
 * Fetch AI-driven HR process automation insights.
 */
export const fetchHRProcessAutomation = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/hr-process-automation/automate");
    return response.data;
  } catch (error) {
    console.error("Error fetching HR automation insights:", error);
    return { error: "Failed to load HR automation data." };
  }
};
