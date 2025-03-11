import express from "express";
import User from "../models/user.model";

const router = express.Router();

/**
 * Handles user data deletion requests (GDPR compliance).
 */
router.delete("/delete-account/:userId", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.json({ message: "User data deleted successfully (GDPR comliance)" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user data" });
  }
});

export default router;
