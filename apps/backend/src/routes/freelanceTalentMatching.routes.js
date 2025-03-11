import express from "express";
import { matchFreelancers } from "../services/freelanceTalentMatchingService.js";

// AI-powered freelancer-job matching

const router = express.Router();

router.post("/match", async (req, res) => {
  const match = await matchFreelancers(req.body);
  res.json(match);
});

export default router;
