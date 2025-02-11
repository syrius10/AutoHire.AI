import express from "express";
import { pool } from "../auth/db";

const router = express.Router();

// ✅ Schedule an interview
router.post("/schedule", async (req, res) => {
    const { employer_id, candidate_id, job_id, date_time } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO interviews (employer_id, candidate_id, job_id, date_time, status) VALUES ($1, $2, $3, $4, 'scheduled') RETURNING *",
            [employer_id, candidate_id, job_id, date_time]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Fetch scheduled interviews
router.get("/", async (req, res) => {
    try {
        const result = await.pool.query("SELECT * FROM interviews");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;