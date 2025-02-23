import { useEffect, useState } from "react";
import { analyzeVideoInterview } from "../services/videoInterviewAnalysisService";

const VideoInterviewAnalysis = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleAnalyze = async () => {
        if (!videoFile) {
            alert("Please upload a video file first.");
            return;
        }

        setLoading(true);
        const result = await analyzeVideoInterview(videoFile);
        setAnalysisResult(result);
        setLoading(false);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">🎥 AI Video Interview Analysis</h2>
            <p>Upload an interview video and get AI-powered insights on candidate responses.</p>

            <input type="file" accept="video/*" onChange={handleFileChange} className="mt-4" />
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded" onClick={handleAnalyze}>
                Analyze Video
            </button>

            {loading && <p className="mt-4">Processing video...</p>}

            {analysisResult && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                    <h3 className="text-lg font-semibold">Analysis Result:</h3>
                    <p><strong>Sentiment:</strong> {analysisResult.sentiment}</p>
                    <p><strong>Confidence Level:</strong> {analysisResult.confidenceLevel}%</p>
                    <p><strong>Speech Clarity:</strong> {analysisResult.speechClarity}</p>
                </div>
            )}
        </div>
    );
};

export default VideoInterviewAnalysis;