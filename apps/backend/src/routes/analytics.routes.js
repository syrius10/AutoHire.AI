import express from "express";
import { pool } from "../auth/db.js";

const router = express.Router();

// ✅ Get total jobs posted
router.get("/jobs-count", async (req, res) => {
    try {
        const result = await pool.query("SELECT COUNT(*) FROM jobs");
        res.json({ total_jobs: result.rows[0].count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get total applications received
router.get("/applications-count", async (req, res) => {
    try {
        const result = await pool.query("SELECT COUNT(*) FROM applications");
        res.json({ total_applications: result.rows[0].count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get Most In-Demand Skills
router.get("/top-skills", async(req, res) => {
    try {
        const result = await pool.query(`
            SELECT skill, COUNT(*) as count
            FROM candidate_skills
            GROUP BY skill
            ORDER BY count DESC LIMIT 5        
        `);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;