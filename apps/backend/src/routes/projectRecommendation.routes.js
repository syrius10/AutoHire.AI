import express from "express";
import { recommendProjects } from "../services/projectRecommendationService.js";

const router = express.Router();

router.post("/recommend", async (req, res) => {
  const result = await recommendProjects(req.body);
  res.json(result);
});

export default router;
