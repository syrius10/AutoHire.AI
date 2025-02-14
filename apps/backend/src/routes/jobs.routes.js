import express from "express";
import { pool } from "../db.js";

const router = express.Router();

router.post("/post", async (req, res) => {
    const { employer_id, title, description } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO jobs (employer_id, title, descrition) VALUES ($1, $2, $3) RETURNING *",
            [employer_id, title, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM jobs");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;