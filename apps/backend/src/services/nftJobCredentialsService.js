import axios from "axios";

// Generates & verifies AI-driven NFT job credentials

/**
 * Mints an NFT for job credentials
 */
export const mintNFTCredential = async (candidateAddress, credentialData) => {
  try {
    const response = await axios.post("http://localhost:5123/mint-nft", {
      candidate_address: candidateAddress,
      credential_data: credentialData,
    });
    return response.data;
  } catch (error) {
    console.error("Error minting NFT credential:", error);
    throw new Error("NFT credential minting failed.");
  }
};
