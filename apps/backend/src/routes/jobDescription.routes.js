import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/generate", async (req, res) => {
  const { job_role, company_name } = req.body;
  const response = await axios.post(
    "http://localhost:5010/generate_job_description",
    { job_role, company_name },
  );
  res.json(response.data);
});

router.post("/optimize", async (req, res) => {
  const { job_description } = req.body;
  const response = await axios.post(
    "http://localhost:5011/optimize_job_description",
    { job_description },
  );
  res.json(response.data);
});

export default router;
