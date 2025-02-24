import express from "express";
import { getReskillingRecommendations } from "../services/reskillingPathwaysService.js";

const router = express.Router();

router.post("/reskilling", getReskillingRecommendations);

export default router;
