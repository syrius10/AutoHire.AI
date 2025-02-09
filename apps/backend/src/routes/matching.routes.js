import express from "express";
import axios from "axios";

const router = express.Router();
const AI_SERVICE_URL = "http://localhost:5001/match";

router.post("/", async (req, res) => {
    try {
        const { skills } = req.body;
        const response = await axios.post(AI_SERVICE_URL, { skills });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;