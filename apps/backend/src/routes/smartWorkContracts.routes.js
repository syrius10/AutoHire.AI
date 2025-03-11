import express from "express";
import {
  generateSmartContract,
  enforceSmartContract,
} from "../services/smartWorkContractsService.js";

// AI-powered smart contracts for automated work agreements.

const router = express.Router();

/**
 * @route POST /api/smart-contracts/generate
 * @desc AI-generated smart contract creation
 */
router.post("/generate", async (req, res) => {
  try {
    const { employer, freelancer, contractTerms } = req.body;

    if (!employer || !freelancer || !contractTerms) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const contract = await generateSmartContract(
      employer,
      freelancer,
      contractTerms,
    );
    res.json(contract);
  } catch (error) {
    console.error("Error generating smart contract:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route POST /api/smart-contracts/enforce
 * @desc AI-driven contract enforcement & monitoring
 */
router.post("/enforce", async (req, res) => {
  try {
    const { contractId } = req.body;

    if (!contractId) {
      return res.status(400).json({ error: "Contract ID is required" });
    }

    const enforcementResult = await enforceSmartContract(contractId);
    res.json(enforcementResult);
  } catch (error) {
    console.error("Error enforcing smart contract:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
