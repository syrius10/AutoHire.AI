import axios from "axios";

// Calls AI model to check labor law compliance

export const checkLaborCompliance = async (
  contractType,
  rightsScore,
  complianceHistory,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5117/check-compliance",
      {
        contract_type: contractType,
        rights_score: rightsScore,
        compliance_history: complianceHistory,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error checking labor law compliance:", error);
    throw new Error("Labor law compliance check failed.");
  }
};
