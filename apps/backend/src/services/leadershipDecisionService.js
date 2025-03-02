import axios from "axios";

// Fetches AI-driven Leadership Decision Confidence

/**
 * Assesses leadership decision confidence using AI.
 */
export const assessDecisionConfidence = async (leaderId, experience, strategicThinking, teamLeadership) => {
  try {
    const response = await axios.post("http://localhost:5111/assess", {
      leaderId,
      experience,
      strategicThinking,
      teamLeadership,
    });

    return response.data;
  } catch (error) {
    console.error("Error in leadership decision assessment:", error);
    throw new Error("Leadership decision assessment failed.");
  }
};
