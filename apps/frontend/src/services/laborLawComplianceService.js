import axios from "axios";

// Calls AI model to check labor law compliance

export const checkLaborCompliance = async (
  contractType,
  rightsScore,
  complianceHistory,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/api/labor-law-compliance/check",
      {
        contractType,
        rightsScore,
        complianceHistory,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching labor law compliance:", error);
    throw new Error("Failed to check labor law compliance.");
  }
};
