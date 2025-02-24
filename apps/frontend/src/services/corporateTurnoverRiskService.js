import axios from "axios";

// Fetches AI-driven corporate turnover risk analysis.

export const getTurnoverRiskAnalysis = async () => {
  try {
    const response = await axios.get("/api/corporate-turnover-risk");
    return response.data;
  } catch (error) {
    console.error("Error fetching turnover risk analysis:", error);
    return { attritionRate: "N/A", riskFactors: [] };
  }
};
