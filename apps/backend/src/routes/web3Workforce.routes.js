import express from "express";
import { processWeb3Payment } from "../services/web3WorkforceService.js";

// AI-powered Web3 hiring & payment automation

const router = express.Router();

/**
 * @route POST /api/web3-workforce/payment
 * @desc AI-powered Web3 hiring & payments processing
 */
router.post("/payment", async (req, res) => {
  try {
    const { sender, receiver, amount } = req.body;
    if (!sender || !receiver || !amount) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const txn = await processWeb3Payment(sender, receiver, amount);
    res.json({ message: "Web3 payment initiated", txn });
  } catch (error) {
    console.error("Error processing Web3 payment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
