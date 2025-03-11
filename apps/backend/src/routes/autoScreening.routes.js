import express from "express";
import { autoScreenCandidate } from "../services/autoScreeningService";

const router = express.Router();

/**
 * Auto-screen a candidate
 */
router.post("/screen", async (req, res) => {
  const { candidateId, jobId } = req.body;
  if (!candidateId || !jobId)
    return res.status(400).json({ error: "Missing required fields" });

  const result = await autoScreenCandidate(candidateId, jobId);
  res.json(result);
});

export default router;
