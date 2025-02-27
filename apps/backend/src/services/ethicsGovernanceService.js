import axios from "axios";

// Provides AI-driven ethical decision enforcement in HR.

/**
 * Calls AI ethics model to ensure fair hiring practices.
 */
export const evaluateHiringEthics = async (candidateScore, diversityFactor, hrBiasScore) => {
  try {
    const response = await axios.post("http://localhost:5079/evaluate_hiring", {
      candidateScore,
      diversityFactor,
      hrBiasScore,
    });
    return response.data;
  } catch (error) {
    console.error("Ethics Governance AI Error:", error);
    throw new Error("Ethical hiring evaluation failed.");
  }
};
