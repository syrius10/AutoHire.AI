import express from "express";
import { createCheckoutSession } from "../services/paymentService.js";

const router = express.Router();

/**
 * ✅ Create Checkout Session (Subscription Payment)
 */
router.post("/checkout", async (req, res) => {
  try {
    const session = await createCheckoutSession();
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
