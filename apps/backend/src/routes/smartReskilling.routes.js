import express from "express";
import { getReskillingSuggestions } from "../services/smartReskillingService.js";

// AI-based upskilling & reskilling suggestions.

const router = express.Router();

router.post("/", getReskillingSuggestions);

export default router;
