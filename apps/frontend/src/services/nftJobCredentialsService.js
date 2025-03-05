import axios from "axios";

// Retrieves AI-driven NFT-based credentials & verifications

export const fetchNFTJobCredentials = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/nft-job-credentials/mint");
    return response.data;
  } catch (error) {
    console.error("Error fetching NFT job credentials:", error);
    return { error: "Failed to load NFT job credentials." };
  }
};
