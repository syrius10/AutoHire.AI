import { useState } from "react";
import { analyzeJobPost, optimizeForSEO } from "../services/jobPostService";

const JobPostOptimization = () => {
    const [jobPost, setJobPost] = useState("");
    const [analysis, setAnalysis] = useState("");
    const [seoData, setSeoData] = useState("");

    const handleAnalyze = async () => {
        const result = await analyzeJobPost(jobPost);
        setAnalysis(result.analysis);
    };

    const handleSEO = () => {
        const result = await optimizeForSEO(jobPost);
        setSeoData(result);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">AI-Powered Job Post Optimization</h2>
            <textarea
                placeholder="Enter Job Post"
                value={jobPost}
                onChange={(e) => setJobPost(e.target.value)}
                className="border p-2 mt-4 w-full"
            />
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white" onClick={handleAnalyze}>
                Analyze Job Post
            </button>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white" onClick={handleSEO}>
                Optimize for SEO
            </button>

            {analysis && <p className="mt-4">{analysis}</p>}
            {seoData && (
                <div className="mt-4 border p-4">
                    <p><strong>Optimized Title:</strong> {seoData.metadata.title}</p>
                    <p><strong>SEO Keywords:</strong> {seoData.keywords.join(", ")}</p>
                </div>
            )}
        </div>
    );
};

export default JobPostOptimization;