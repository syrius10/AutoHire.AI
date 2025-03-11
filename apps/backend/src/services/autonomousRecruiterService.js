import axios from "axios";

// Calls AI model to screen & shortlist candidates.

/**
 * Calls AI model for candidate screening
 */
export const screenCandidate = async (resumeText, jobRole) => {
  try {
    const response = await axios.post("http://localhost:5062/screen", {
      resumeText,
      jobRole,
    });
    return response.data;
  } catch (error) {
    console.error("Error screening candidate:", error);
    throw new Error("Candidate screening failed.");
  }
};

/**
 * Calls AI model to rank candidates
 */
export const rankCandidate = async (candidateFeatures) => {
  try {
    const response = await axios.post("http://localhost:5030/rank", {
      candidateFeatures,
    });
    return response.data;
  } catch (error) {
    console.error("Error ranking candidate:", error);
    throw new Error("Candidate ranking failed.");
  }
};
