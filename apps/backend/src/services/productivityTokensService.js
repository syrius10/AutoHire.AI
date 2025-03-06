import axios from "axios";

// Calls AI model for tokenized productivity rewards & incentive tracking.

/**
 * Calls AI model to assign productivity tokens.
 */
export const assignProductivityTokens = async (work_hours, task_completion_rate, peer_review_score) => {
  try {
    const response = await axios.post("http://localhost:5131/assign-tokens", {
      work_hours,
      task_completion_rate,
      peer_review_score,
    });
    return response.data.productivity_tokens;
  } catch (error) {
    console.error("Error in assigning productivity tokens:", error);
    throw new Error("Failed to assign productivity tokens.");
  }
};
