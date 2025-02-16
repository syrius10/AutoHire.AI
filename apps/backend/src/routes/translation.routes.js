import express from "express";
import { translateJobPost } from "../services/translationService";

const router = express.Router();

router.post("/translate", async (req, res) => {
    const { text, targetLang } = req.body;
    const translatedText = await translateJobPost(text, targetLang);
    res.json({ translatedText });
});

export default router;