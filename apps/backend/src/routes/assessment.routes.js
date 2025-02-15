import express from "express";

const router = express.Router();

router.post("/start", (req, res) => {
    const { category, difficulty } = req.body;
    const score = Math.floor(Math.random() * 100);  // Simulated score
    res.json({ category, difficulty, score });
});

export default router;