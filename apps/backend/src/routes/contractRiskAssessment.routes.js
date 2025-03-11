import express from "express";
import { assessContractRisk } from "../services/contractRiskAssessmentService.js";

// Analyzes contract risks

const router = express.Router();

router.post("/risk", async (req, res) => {
  const risk = await assessContractRisk(req.body);
  res.json(risk);
});

export default router;
