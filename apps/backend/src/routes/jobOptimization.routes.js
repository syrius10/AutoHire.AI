import express from "express";
import axios from "axios";
import { optimizeForSEO } from "../services/seoService";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  const { job_post } = req.body;
  const response = await axios.post("http://localhost:5012/analyze_job_post", {
    job_post,
  });
  res.json(response.data);
});

router.post("/seo", async (req, res) => {
  const { job_post } = req.body;
  const seoData = optimizeForSEO(job_post);
  res.json(seoData);
});

export default router;
