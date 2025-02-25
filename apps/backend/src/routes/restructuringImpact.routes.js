import express from "express";
import { predictRestructuringImpact } from "../services/restructuringImpactService.js";

const router = express.Router();

router.post("/impact", predictRestructuringImpact);

export default router;
