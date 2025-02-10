import express from "express";
import axios from "axios";
import multer from "multer";

const router = express.Router();
const AI_EVAL_URL = "http://localhost:5002/evaluate";

// Setup multer for file uploads
const upload = multer({ dest: "uploads/" });

router.post("/", async (req, res) => {
    try {
        const response = await axios.post(AI_EVAL_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Speech evaluation route (Correct Placement)
router.post("/speech", upload.single("audio"), async (req, res) => {
    try {
      const formData = new FormData();
      formData.append("audio", req.file.buffer, req.file.originalname);
  
      const response = await axios.post(`${AI_EVAL_URL}/evaluate_speech`, formData);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });  

export default router;