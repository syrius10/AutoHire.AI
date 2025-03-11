import axios from "axios";

// Manages AI-driven smart contracts & decentralized hiring agreements.

/**
 * Calls AI service to generate smart contracts for gig hiring.
 */
export const generateSmartContract = async (
  freelancerId,
  clientId,
  jobDetails,
  paymentTerms,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5086/api/blockchain-contracts/generate",
      {
        freelancerId,
        clientId,
        jobDetails,
        paymentTerms,
      },
    );
    return response.data.contract;
  } catch (error) {
    console.error("Error generating smart contract:", error);
    throw new Error("Smart contract creation failed.");
  }
};
