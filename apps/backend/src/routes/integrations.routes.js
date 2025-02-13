import express from "express";
import axios from "axios";

const router = express.Router();

// ✅ Fetch LinkedIn Profile Data
router.get("/linkedin/:profileId", async (req, res) => {
    try {
        const { profileId } = req.params;
        const response = await axios.get(`https://api.linkedin.com/v2/people/${profileId}`, {
            headers: { Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`}
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Fetch GitHub Contributions
router.get("/github/:username", async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Google Calendar - Create Event
router.get("/calendar/google", async (req, res) => {
    try {
        const { summary, description, start, end } = req.body;
        const response = await axios.post(`https://www.googleapis.com/calendar/v3/calendars/primary/events`, {
            summary,
            description,
            start: { dateTime: start },
            end: { dateTime: end }
        }, {
            headers: { Authorization: `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`}
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });     
    }
});

export default router;