import express from "express";
import { assessRetentionRisk } from "../services/postAcquisitionRetentionService.js";

const router = express.Router();

router.post("/retention-risk", assessRetentionRisk);

export default router;
