import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
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

/**
 * LinkedIn OAuth Callback
 */
router.get("/linkedin/callback", async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: "Authorization code is missing" });
    }

    try {
        const response = await axios.post("https://www.linkedin.com/oauth/v2/accessToken", null, {
            params: {
                grant_type: "authorization_code",
                code: code,
                redirect_uri: "https//autohire.ai/api/auth/linkedin/callback",
                client_id: process.env.LINKEDIN_CLIENT_ID,
                client_secret: process.env.LINKEDIN_CLIENT_SECRET,
            },
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        res.json({ access_token: response.data.access_token });
    } catch (error) {
        res.status(500).json({ error: error.response?.data || "Failed to exchange code for access token" });
    }
});

export default router;