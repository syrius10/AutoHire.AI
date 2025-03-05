import express from "express";
import { mintNFTCredential } from "../services/nftJobCredentialsService.js";

// AI-powered NFT-based job credentialing & reputation tracking

const router = express.Router();

/**
 * @route POST /api/nft-job-credentials/mint
 * @desc AI-driven NFT job credential creation
 */
router.post("/mint", async (req, res) => {
  try {
    const { candidateAddress, credentialData } = req.body;
    if (!candidateAddress || !credentialData) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const txn = await mintNFTCredential(candidateAddress, credentialData);
    res.json({ message: "NFT job credential minted", txn });
  } catch (error) {
    console.error("Error minting NFT credential:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
