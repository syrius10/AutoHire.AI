import express from "express";
import { assessCandidate } from "../services/globalTalentService.js";

const router = express.Router();

router.post("/", assessCandidate);

export default router;
