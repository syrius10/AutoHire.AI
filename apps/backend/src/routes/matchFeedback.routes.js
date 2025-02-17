import express from "express";
import db from "../db";

const router = express.Router();

router.post("/feedback", async (req, res) => {
    const { jobId, candidateId, feedbackScore } = req.body;

    await db.query(
        "INSERT INTO match_feedback (job_id, candidate_id, feedback_score) VALUES ($1,$2, $3)",
        [jobId, candidateId, feedbackScore]
    );

    res.json({ success: true, message: "feedback recorded successfully!"});
});

export default router;