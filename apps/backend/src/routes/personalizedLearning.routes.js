import express from "express";
import { getLearningRecommendations } from "../services/personalizedLearningService.js";

const router = express.Router();

router.post("/", getLearningRecommendations);

export default router;
