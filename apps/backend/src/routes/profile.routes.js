import express from "express";
import multer from "multer";
import axios from "axios";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
const AI_SERVICE_URL = "http://localhost:5005/enrich-profile";

// ✅ Upload Resume & Get AI-Enhanced Profile
router.post("/enrich", upload.single("resume"), async (req, res) => {
  try {
    const formData = new FormData();
    formData.append("resume", req.file.buffer, req.file.originalname);

    const response = await axios.post(AI_SERVICE_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
