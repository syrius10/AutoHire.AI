import axios from "axios";

// Retrieves AI-driven real-time performance feedback

/**
 * AI-powered real-time feedback analysis
 */
export const analyzeFeedback = async (employeeId, feedbackText) => {
  try {
    const response = await axios.post("/api/real-time-feedback/analyze", {
      employeeId,
      feedbackText,
    });
    return response.data;
  } catch (error) {
    console.error("Error analyzing feedback:", error);
    throw new Error("Feedback analysis failed.");
  }
};
