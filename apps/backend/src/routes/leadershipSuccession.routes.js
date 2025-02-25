import express from "express";
import { getSuccessionPlan } from "../services/leadershipSuccessionService.js";

const router = express.Router();

router.post("/plan", async (req, res) => {
  const data = req.body;
  const plan = await getSuccessionPlan(data);
  res.json(plan);
});

export default router;
