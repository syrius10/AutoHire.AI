import express from "express";
import { processGigPayment } from "../services/gigPaymentsService.js";

// Automates blockchain-powered gig payments.

const router = express.Router();

/**
 * @route POST /api/gig-payments/process
 * @desc Blockchain-powered automated payment processing.
 */
router.post("/process", async (req, res) => {
  try {
    const { contractId, freelancerId, paymentAmount } = req.body;
    if (!contractId || !freelancerId || !paymentAmount) {
      return res
        .status(400)
        .json({ error: "Missing required payment details" });
    }

    const paymentStatus = await processGigPayment(
      contractId,
      freelancerId,
      paymentAmount,
    );
    res.json({ paymentStatus });
  } catch (error) {
    console.error("Error processing gig payment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
