import express from "express";
import { authorizeRoles } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/update", authorizeRoles(["admin", "hr"]), (req, res) => {
  // Directly respond without assigning to `workflow` variable
  res.json({ success: true, message: "Workflow updated" });
});

export default router;
