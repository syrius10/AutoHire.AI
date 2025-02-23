import express from "express";
import multer from "multer";
import { spawn } from "child_process";
import path from "path";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/analyze", upload.single("video"), async (req, res) => {
    try {
        const videoFilePath = path.resolve(req.file.path);

        // Call the Python script to analyze the video
        const process = spawn("python3", ["../../ai-services/videoInterviewAnalysisService.py", videoFilePath]);

        let output = "";
        process.stdout.on("data", (data) => (output += data.toString()));

        process.stderr.on("data", (error) => console.error("Python Error: ", error.toString()));

        process.on("close", () => {
            try {
                const result = JSON.parse(output);
                res.json(result);
            } catch (error) {
                res.status(500).json({ error: "Failed to parse AI analysis response" });
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;