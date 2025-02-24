import axios from "axios";

// Predicts enterprise-wide attrition risks.

/**
 * Analyze company-wide attrition risk using AI.
 */
export const getTurnoverRiskAnalysis = async () => {
  try {
    const response = await axios.get("http://localhost:5034/corporate-turnover-risk");
    return response.data;
  } catch (error) {
    console.error("Error fetching turnover risk analysis:", error);
    throw new Error("Failed to retrieve turnover risk data.");
  }
};
