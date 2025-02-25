import express from "express";
import { generateSmartContract } from "../services/smartContractService.js";

const router = express.Router();

router.post("/generate", generateSmartContract);

export default router;
