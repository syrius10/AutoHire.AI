import express from "express";
import { visaScreening } from "../services/automatedVisaScreeningService.js";

const router = express.Router();

router.post("/", visaScreening);

export default router;
