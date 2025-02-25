import express from "express";
import { validateEscrowPayment } from "../services/escrowPaymentService.js";

const router = express.Router();

router.post("/validate", validateEscrowPayment);

export default router;
