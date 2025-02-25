import express from "express";
import { getExecutiveTalentRecommendations } from "../services/executiveTalentService.js";

const router = express.Router();

router.post("/recommend", async (req, res) => {
  const data = req.body;
  const recommendations = await getExecutiveTalentRecommendations(data);
  res.json(recommendations);
});

export default router;
