import { useState } from "react";
import { analyzeInterviewQnA, analyzeSentiment, analyzeVideo } from "../services/interviewService";

const AIInterviewDahsboard = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [sentiment, setSentiment] = useState("");
    const [videoMotion, setVideoMotion] = useState("");

    const handleAsk = async () => {
        const result = await analyzeInterviewQnA(question);
        setAnswer(result.answer);
    };

    const handleAnalyzeSentiment = async (audioFile) => {
        const result = await analyzeSentiment(audioFile);
        setSentiment(result.sentiment);
    };

    const handleAnalyzeVideo = async (videoFile) => {
        const result = await analyzeVideo(videoFile);
        setVideoMotion(result.emotion);
    };

    return (
        <div className="p-6">
          <h2 className="text-2xl font-bold">AI-Powered Interview Insights</h2>
          
          <input type="text" placeholder="Ask an interview question" value={question} onChange={(e) => setQuestion(e.target.value)} className="border p-2 w-full" />
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white" onClick={handleAsk}>
            Get AI Answer
          </button>
          {answer && <p className="mt-4">{answer}</p>}
    
          <h3 className="text-lg font-semibold mt-6">Voice Sentiment Analysis</h3>
          <input type="file" accept="audio/*" onChange={(e) => handleAnalyzeSentiment(e.target.files[0])} />
          {sentiment && <p className="mt-4">Sentiment: {sentiment}</p>}
    
          <h3 className="text-lg font-semibold mt-6">Video Emotion Analysis</h3>
          <input type="file" accept="video/*" onChange={(e) => handleAnalyzeVideo(e.target.files[0])} />
          {videoEmotion && <p className="mt-4">Emotion Detected: {videoEmotion}</p>}
        </div>
    );
};

export default AIInterviewDahsboard;