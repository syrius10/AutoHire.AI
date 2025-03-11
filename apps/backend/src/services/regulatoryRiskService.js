import axios from "axios";

// Assess regulatory risk based on region, compliance score, and past violations

export const assessRegulatoryRisk = async (
  region,
  complianceScore,
  pastViolations,
) => {
  try {
    const response = await axios.post("http://localhost:5118/assess-risk", {
      region,
      compliance_score: complianceScore,
      past_violations: pastViolations,
    });
    return response.data;
  } catch (error) {
    console.error("Error assessing regulatory risk:", error);
    throw new Error("Regulatory risk assessment failed.");
  }
};
