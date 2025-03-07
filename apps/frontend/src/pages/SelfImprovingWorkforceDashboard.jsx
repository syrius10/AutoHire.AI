import { useEffect, useState } from "react";
import { fetchWorkforcePrediction } from "../services/selfImprovingWorkforceService";

// AI-powered workforce prediction & self-learning insights.

const SelfImprovingWorkforceDashboard = () => {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchWorkforcePrediction(5, 80, 70);
      setPrediction(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔮 Workforce Evolution Predictions</h2>
      {prediction ? (
        <div className="mt-4 border p-4 rounded bg-white shadow">
          <p><strong>Prediction:</strong> {prediction.workforcePrediction}</p>
        </div>
      ) : (
        <p>Loading workforce predictions...</p>
      )}
    </div>
  );
};

export default SelfImprovingWorkforceDashboard;
