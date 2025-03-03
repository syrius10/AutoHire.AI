import axios from "axios";

/**
 * Fetches AI-driven legal compliance check and risk assessment.
 */
export const fetchLegalCompliance = async ({ country, terms, contractLength, complianceScore, pastDisputes }) => {
  try {
    const response = await axios.post("http://localhost:5000/api/legal-compliance/check", {
      country,
      terms,
      contract_length: contractLength,
      compliance_score: complianceScore,
      past_disputes: pastDisputes,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching legal compliance data:", error);
    return { error: "Failed to retrieve compliance results." };
  }
};

