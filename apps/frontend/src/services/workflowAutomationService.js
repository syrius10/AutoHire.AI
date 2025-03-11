import axios from "axios";

// Retrieves AI-driven workflow optimization recommendations

/**
 * Fetch AI-powered workflow optimization insights.
 */
export const fetchWorkflowAutomation = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5001/api/workflow-automation/optimize",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching workflow automation insights:", error);
    return { error: "Failed to load workflow optimization data." };
  }
};
