import { useState } from "react";
import { analyzeFeedback } from "../services/realTimeFeedbackService";

// AI-powered real-time feedback analysis

const RealTimeFeedbackDashboard = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackResponse, setFeedbackResponse] = useState(null);

  const handleAnalyzeFeedback = async () => {
    const response = await analyzeFeedback("employee123", feedbackText); // Example employee ID
    setFeedbackResponse(response);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔍 AI-Powered Real-Time Feedback</h2>
      
      <div className="mt-4">
        <textarea placeholder="Enter employee feedback" onChange={(e) => setFeedbackText(e.target.value)} className="w-full p-2 border rounded"></textarea>
        <button onClick={handleAnalyzeFeedback} className="mt-2 bg-blue-500 text-white p-2 rounded">Analyze Feedback</button>
      </div>

      {feedbackResponse && <pre className="mt-4 border p-4 rounded">{JSON.stringify(feedbackResponse, null, 2)}</pre>}
    </div>
  );
};

export default RealTimeFeedbackDashboard;
