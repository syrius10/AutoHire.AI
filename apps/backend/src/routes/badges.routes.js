import express from "express";

const router = express.Router();

router.get("/:userId", (req, res) => {
    res.json(["Top Java Developer", "AI Specialist", "Coding Champion"]);
});

export default router;