import express from "express";
import { calculateTrustScore } from "../services/trustScoreService.js";

const router = express.Router();

router.post("/score", async (req, res) => {
  const result = await calculateTrustScore(req.body);
  res.json(result);
});

export default router;
