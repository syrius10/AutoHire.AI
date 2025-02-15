import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/insights/:interviewId", async (req, res) => {
    try {
        const interviewId = req.params.interviewId;

        // Simulated interview transcript
        const transcript = "I have five years of experience in machine learning and AI development.";

        // Call AI services
        const transcription = { transcription: transcript };
        const sentiment = await axios.post("http://localhost:5007/analyze_sentiment", { text: transcript });
        const keywords = await axios.post("http://localhost:5008/evaluate_keywords", { text: transcript });
        const summary = await axios.post("http://localhost:5009/generate_summary", { transcript });

        res.json({
            transcription: transcription.transcription,
            sentiment: sentiment.data.sentiment,
            keywords: keywords.data.keywords,
            summary: summary.data.summary
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;