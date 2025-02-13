import { useState } from "react";
import { analyzeInterview } from "../services/interviewService";

const InterviewAnalysis = () => {
    const [file, setFile] = useState(null);
    const [analysis, setAnalysis] = useState(null);

    const handleUpload = async () => {
        if (!file) return alert("Please upload and audio file.");
        const result = await analyzeInterview(file);
        setAnalysis(result);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">AI Interview Analysis</h2>

            <input type="file" className="border p-2 mt-4" onChange={(e) => setFile(e.target.files[0])} />
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white" onClick={handleUpload}>
                Analyze Interview
            </button>

            {analysis && (
                <div className="mt-6 border p-4 rounded shadow">
                    <h3 className="text-lg font-semibold">Interview Insights</h3>
                    <p><strong>Transcript:</strong> {analysis.transcript}</p>
                    <p><strong>Sentiment:</strong> {analysis.sentiment}</p>
                    <p><strong>Confidence Score:</strong> {analysis.confidence_score.toFixed(2)}</p>
                    <p><strong>Keywords:</strong> {analysis.keywords.join(", ")}</p>
                </div>
            )}
        </div>
    );
};

export default InterviewAnalysis;