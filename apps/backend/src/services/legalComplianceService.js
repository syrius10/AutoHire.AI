import axios from "axios";

/**
 * Calls AI-powered compliance check API.
 */
export const checkCompliance = async (
  country,
  terms,
  contractLength = 12,
  complianceScore = 80,
  pastDisputes = 0,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5045/check-compliance",
      {
        country,
        terms,
        contract_length: contractLength,
        compliance_score: complianceScore,
        past_disputes: pastDisputes,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching compliance check:", error);
    throw new Error("Failed to check legal compliance.");
  }
};
