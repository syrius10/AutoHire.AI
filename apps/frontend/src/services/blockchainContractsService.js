import axios from "axios";

// Retrieves AI-driven smart contract insights.

/**
 * Fetches AI-generated smart contracts.
 */
export const fetchSmartContracts = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5086/api/blockchain-contracts/generate",
      {
        freelancerId: "1234",
        clientId: "5678",
        jobDetails: "Website Development",
        paymentTerms: "50% upfront, 50% on completion",
      },
    );
    return response.data.contract;
  } catch (error) {
    console.error("Error fetching smart contracts:", error);
    return [];
  }
};
