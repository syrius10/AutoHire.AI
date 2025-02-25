import express from "express";
import { translateJob } from "../services/multilingualRecruitmentService.js";

const router = express.Router();

router.post("/", translateJob);

export default router;
