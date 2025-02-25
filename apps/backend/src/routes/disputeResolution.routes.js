import express from "express";
import { resolveDispute } from "../services/disputeResolutionService.js";

const router = express.Router();

router.post("/resolve", resolveDispute);

export default router;
