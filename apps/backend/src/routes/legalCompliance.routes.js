import express from "express";
import { checkCompliance } from "../services/legalComplianceService.js";

const router = express.Router();

router.post("/", checkCompliance);

export default router;
