import express from "express";
import { authorizeRoles } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/update", authorizeRoles(["admin", "hr"]), (req, res) => {
    const { workflow } = req.body;
    // Save workflow to database
    res.json({ success: true, message: "Workflow updated" });
});

export default router;