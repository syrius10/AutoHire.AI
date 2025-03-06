import axios from "axios";

// Provides AI-driven workforce decentralization insights.

/**
 * Calls AI model for workforce decentralization analysis.
 */
export const analyzeWorkforce = async (companySize, industry) => {
  try {
    const response = await axios.post("http://localhost:5134/analyze", {
      company_size: companySize,
      industry: industry,
    });
    return response.data;
  } catch (error) {
    console.error("Error analyzing workforce decentralization:", error);
    throw new Error("Workforce decentralization analysis failed.");
  }
};
