import express from "express";
import { generateSmartContract } from "../services/blockchainContractsService.js";

// AI-driven smart contract management for gig hiring.

const router = express.Router();

/**
 * @route POST /api/blockchain-contracts/generate
 * @desc AI-powered smart contract creation for gig hiring.
 */
router.post("/generate", async (req, res) => {
  try {
    const { freelancerId, clientId, jobDetails, paymentTerms } = req.body;
    if (!freelancerId || !clientId || !jobDetails || !paymentTerms) {
      return res.status(400).json({ error: "All contract details are required" });
    }

    const contract = await generateSmartContract(freelancerId, clientId, jobDetails, paymentTerms);
    res.json({ contract });
  } catch (error) {
    console.error("Error generating smart contract:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
