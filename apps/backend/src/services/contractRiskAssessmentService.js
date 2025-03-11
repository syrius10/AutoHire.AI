import axios from "axios";

// Evaluates contract risks in freelance hiring

export const assessContractRisk = async (contractData) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/risk",
      contractData,
    );
    return response.data;
  } catch (error) {
    console.error("Error in assessing contract risk:", error);
    return { error: "Failed to assess contract risk." };
  }
};
