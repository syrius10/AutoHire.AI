import express from "express";
import { fetchWorkforceInsights, fetchAttritionRisk, fetchDiversityInsights } from "../services/workforceInsightsService";

const router = express.Router();

router.get("/insights", fetchWorkforceInsights);
router.post("/attrition", fetchAttritionRisk);
router.post("/diversity", fetchDiversityInsights);

export default router;