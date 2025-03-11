import axios from "axios";

// AI model for self-executing contracts.

/**
 * Calls AI model to generate smart contracts for work agreements.
 */
export const generateSmartContract = async (
  employer,
  freelancer,
  contractTerms,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5115/generate-smart-contract",
      {
        employer,
        freelancer,
        contractTerms,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error generating smart contract:", error);
    throw new Error("Failed to generate smart contract.");
  }
};

/**
 * Calls AI model to enforce smart contract compliance & monitoring.
 */
export const enforceSmartContract = async (contractId) => {
  try {
    const response = await axios.post(
      "http://localhost:5090/enforce-contract",
      {
        contractId,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error enforcing smart contract:", error);
    throw new Error("Failed to enforce smart contract.");
  }
};
