import axios from "axios";

// AI-based real-time feedback analysis

/**
 * AI-powered real-time feedback analysis
 */
export const analyzeFeedback = async (employeeId, feedbackText) => {
  try {
    const response = await axios.post("http://localhost:5106/analyze-feedback", {
      employeeId,
      feedbackText,
    });
    return response.data;
  } catch (error) {
    console.error("Error analyzing feedback:", error);
    throw new Error("Feedback analysis failed.");
  }
};
