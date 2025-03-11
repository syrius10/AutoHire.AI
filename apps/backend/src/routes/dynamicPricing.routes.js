import express from "express";
import { getPricingRecommendation } from "../services/dynamicPricingService.js";

// AI-driven real-time pricing API.

const router = express.Router();

router.post("/recommend-price", async (req, res) => {
  const result = await getPricingRecommendation(req.body);
  res.json(result);
});

export default router;
