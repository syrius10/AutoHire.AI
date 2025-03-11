import axios from "axios";

// Calls AI for blockchain-powered freelancer credibility scoring

export const fetchBlockchainCredibility = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5001/api/blockchain-credibility/score",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching blockchain credibility score:", error);
    return { error: "Failed to load blockchain credibility score." };
  }
};
