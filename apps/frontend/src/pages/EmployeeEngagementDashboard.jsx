import { useState } from "react";
import { analyzeEngagement } from "../services/employeeEngagementService";

export default function EmployeeEngagementDashboard() {
  const [feedback, setFeedback] = useState("");
  const [workload, setWorkload] = useState(3);
  const [teamSatisfaction, setTeamSatisfaction] = useState(3);
  const [careerGrowth, setCareerGrowth] = useState(3);
  const [engagementScore, setEngagementScore] = useState(null);
  const [sentiment, setSentiment] = useState("");

  const handleAnalyzeEngagement = async () => {
    try {
      const result = await analyzeEngagement(feedback, workload, teamSatisfaction, careerGrowth);
      setEngagementScore(result.engagementScore);
      setSentiment(result.sentimentAnalysis);
    } catch (error) {
      console.error("Failed to analyze engagement:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>AI-Powered Employee Engagement Analysis</h2>

      <textarea
        placeholder="Enter employee feedback..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>

      <div className="slider-container">
        <label>Workload Balance: {workload}</label>
        <input type="range" min="1" max="5" value={workload} onChange={(e) => setWorkload(Number(e.target.value))} />
      </div>

      <div className="slider-container">
        <label>Team Satisfaction: {teamSatisfaction}</label>
        <input type="range" min="1" max="5" value={teamSatisfaction} onChange={(e) => setTeamSatisfaction(Number(e.target.value))} />
      </div>

      <div className="slider-container">
        <label>Career Growth: {careerGrowth}</label>
        <input type="range" min="1" max="5" value={careerGrowth} onChange={(e) => setCareerGrowth(Number(e.target.value))} />
      </div>

      <button onClick={handleAnalyzeEngagement}>Analyze Engagement</button>

      {engagementScore !== null && (
        <div className="result">
          <h3>Engagement Score: {engagementScore}</h3>
          <p>Sentiment Analysis: {sentiment}</p>
        </div>
      )}
    </div>
  );
}
