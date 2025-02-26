import express from "express";
import { getCareerPath } from "../services/careerPathService.js";

const router = express.Router();

router.post("/", getCareerPath);

export default router;
