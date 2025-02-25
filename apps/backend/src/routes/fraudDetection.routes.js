import express from "express";
import { detectFraud } from "../services/fraudDetectionService.js";

const router = express.Router();

router.post("/analyze", detectFraud);

export default router;
