import express from "express";
import axios from "axios";

const router = express.Router();
const AI_SERVICE_URL = "http://localhost:5003/recommend-jobs";

router.get("/jobs", async (req, res) => {
    try {
        const { skills } = req.query;
        const response = await axios.get(AI_SERVICE_URL, { params: { candidate_skills: skills } });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;