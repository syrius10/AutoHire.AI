import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/predict", async (req, res) => {
    const { job_title, experience } = req.body;
    const response = await axios.post("http://localhost:5015/career_prediction", { job_title, experience });
    res.json(response.data);
});

router.post("/salary_forecast", async (req, res) => {
    const { job_title, location } = req.body;
    const response = await axios.post("http://localhost:5001/api/salary_forecast", { job_title, location });
    res.json(response.data);
});

router.post("/job_demand", async (req, res) => {
    const { job_title } = req.body;
    const response = await axios.post("http://localhost:5001/api/job_demand", { job_title });
    res.json(response.data);
});

export default router;