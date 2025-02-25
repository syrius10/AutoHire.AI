import express from "express";
import { getExecutivePerformance } from "../services/executivePerformanceService.js";

const router = express.Router();

router.post("/performance", async (req, res) => {
  const data = req.body;
  const performance = await getExecutivePerformance(data);
  res.json(performance);
});

export default router;
