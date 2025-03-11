import axios from "axios";

// Fetches AI-driven smart contract execution insights

/**
 * Fetches AI-generated smart contracts.
 */
export const generateSmartContract = async (
  employer,
  freelancer,
  contractTerms,
) => {
  try {
    const response = await axios.post("/api/smart-contracts/generate", {
      employer,
      freelancer,
      contractTerms,
    });
    return response.data;
  } catch (error) {
    console.error("Error generating smart contract:", error);
    throw new Error("Failed to generate smart contract.");
  }
};

/**
 * Calls AI to enforce smart contract compliance & monitoring.
 */
export const enforceSmartContract = async (contractId) => {
  try {
    const response = await axios.post("/api/smart-contracts/enforce", {
      contractId,
    });
    return response.data;
  } catch (error) {
    console.error("Error enforcing smart contract:", error);
    throw new Error("Failed to enforce smart contract.");
  }
};
