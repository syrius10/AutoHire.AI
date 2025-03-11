import axios from "axios";

const AI_SCORING_URL = "http://localhost:5005/analyze-interview";

/**
 * Sends interview responses for AI scoring.
 * @param {string} candidateId - The candidate's unique ID.
 * @param {string} jobId - The job ID for which the interview was conducted.
 * @param {string} transcript - The interview transcript text.
 * @returns {Promise<Object>} - AI-generated scoring and feedback.
 */
export const analyzeInterviewScore = async (candidateId, jobId, transcript) => {
  try {
    const response = await axios.post(AI_SCORING_URL, {
      candidateId,
      jobId,
      transcript,
    });

    return response.data; // { score: 85, feedback: "Strong response on leadership skills." }
  } catch (error) {
    console.error("Error analyzing interview score:", error);
    throw new Error("Interview scoring failed");
  }
};
