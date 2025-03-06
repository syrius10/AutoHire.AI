import express from "express";
import { createSmartContract, releasePayment } from "../services/gigSmartPaymentsService.js";

// AI-powered smart contract-based payments.

const router = express.Router();

/**
 * @route POST /api/gig-smart-payments/create
 * @desc Creates an AI-powered smart contract for gig payments
 */
router.post("/create", async (req, res) => {
  try {
    const { freelancerId, employerId, amount } = req.body;
    if (!freelancerId || !employerId || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const contractId = await createSmartContract(freelancerId, employerId, amount);
    res.json({ contractId });
  } catch (error) {
    console.error("Error creating smart contract:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route POST /api/gig-smart-payments/release
 * @desc Releases smart contract payment to freelancer
 */
router.post("/release", async (req, res) => {
  try {
    const { contractId } = req.body;
    if (!contractId) {
      return res.status(400).json({ error: "Contract ID is required" });
    }

    const result = await releasePayment(contractId);
    res.json(result);
  } catch (error) {
    console.error("Error releasing payment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
