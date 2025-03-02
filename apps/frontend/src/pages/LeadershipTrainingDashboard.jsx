import { useEffect, useState } from "react";
import { fetchLeadershipTraining } from "../services/leadershipTrainingService";

// Displays AI-driven leadership training insights & recommendations.

export default function LeadershipTrainingDashboard() {
  const [trainingData, setTrainingData] = useState(null);

  useEffect(() => {
    async function loadTrainingData() {
      const data = await fetchLeadershipTraining(8, 3, 90); // Example input
      setTrainingData(data);
    }
    loadTrainingData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📈 AI Leadership Training Insights</h2>
      {trainingData ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Recommended Training:</strong> {trainingData.trainingRecommendation}</p>
        </div>
      ) : (
        <p>Loading leadership training recommendations...</p>
      )}
    </div>
  );
}
