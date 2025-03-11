import express from "express";
import {
  getSupportedLanguages,
  translateText,
  getSalaryBenchmark,
} from "../services/globalizationService";

const router = express.Router();

/**
 * ✅ Get Supported Languages
 */
router.get("/languages", async (req, res) => {
  try {
    const languages = await getSupportedLanguages();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * ✅ Translate Text
 */
router.post("/translate", async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;
    const translatedText = await translateText(text, targetLanguage);
    res.json({ translatedText });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * ✅ Get Region-Specific Salary Benchmark
 */
router.get("/salary-benchmark", async (req, res) => {
  try {
    const { role, country } = req.query;
    const benchmark = await getSalaryBenchmark(role, country);
    res.json({ salary: benchmark });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
