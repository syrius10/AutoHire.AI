import { useEffect, useState } from "react";
import { provideTip, assessPerformance } from "../services/aiWorkCoachService";

// AI-powered live coaching & work training assistant.

const AIWorkCoachDashboard = () => {
  const [skill, setSkill] = useState("general");
  const [tip, setTip] = useState("");
  const [productivityScore, setProductivityScore] = useState(50);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    provideTip(skill).then((data) => setTip(data.tip));
  }, [skill]);

  const handleAssessPerformance = async () => {
    const response = await assessPerformance(productivityScore);
    setFeedback(response.feedback);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🧑‍🏫 AI Work Coach</h2>
      <div className="mt-4">
        <select onChange={(e) => setSkill(e.target.value)}>
          <option value="general">General</option>
          <option value="leadership">Leadership</option>
          <option value="coding">Coding</option>
        </select>
        <p className="mt-2">📢 Tip: {tip}</p>
      </div>
      <div className="mt-4">
        <input type="number" value={productivityScore} onChange={(e) => setProductivityScore(e.target.value)} />
        <button onClick={handleAssessPerformance}>Assess Performance</button>
      </div>
      {feedback && <p className="mt-4">{feedback}</p>}
    </div>
  );
};

export default AIWorkCoachDashboard;
