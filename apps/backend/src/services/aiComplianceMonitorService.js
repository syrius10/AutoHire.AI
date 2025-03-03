import axios from "axios";

/**
 * Calls AI model to check AI decision compliance with ethical and legal standards.
 */
export const monitorAICompliance = async (hiringDecision, fairnessScore, legalStandards) => {
  try {
    const response = await axios.post("http://localhost:5116/check_compliance", {
      hiring_decision: hiringDecision,
      fairness_score: fairnessScore,
      legal_standards: legalStandards,
    });

    return response.data;
  } catch (error) {
    console.error("Error monitoring AI compliance:", error);
    throw new Error("AI compliance monitoring failed.");
  }
};
