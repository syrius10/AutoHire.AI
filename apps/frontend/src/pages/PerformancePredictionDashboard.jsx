import { useEffect, useState } from "react";
import { fetchPerformancePrediction } from "../services/performancePredictionService";

// AI-powered employee performance forecasting

export default function PerformancePredictionDashboard() {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchPerformancePrediction();
      setPrediction(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Employee Performance Prediction</h2>
      {prediction ? (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Predicted Performance Score:</strong>{" "}
            {prediction.performanceScore}
          </p>
        </div>
      ) : (
        <p>Loading performance predictions...</p>
      )}
    </div>
  );
}
