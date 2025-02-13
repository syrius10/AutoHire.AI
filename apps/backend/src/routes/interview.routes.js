import express from "express";
import axios from "axios";
import multer from "multer";
import { pool } from "../auth/db.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
const AI_SERVICE_URL = "http://localhost:5004/analyze-interview";

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
        const result = await pool.query("SELECT * FROM interviews");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ AI Interview Analysis Route (New Feature)
router.post("/analyze", upload.single("audio"), async (req, res) => {
    try {
        const formData = new FormData();
        formData.append("audio", req.file.buffer, req.file.originalname);

        const response = await axios.post(AI_SERVICE_URL, formData, {
            headers: { "Content-Type": "multipart/form-data"}
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;