import { useEffect, useState } from "react";
import { fetchRetentionPredictions } from "../services/aiTalentRetentionService";

// Displays AI-based employee retention forecasting.

const AITalentRetentionDashboard = () => {
  const [retentionForecast, setRetentionForecast] = useState(null);

  useEffect(() => {
    fetchRetentionPredictions().then(setRetentionForecast);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔮 AI-Powered Talent Retention Forecasting</h2>
      {retentionForecast ? (
        <pre className="mt-4 p-4 border rounded">{JSON.stringify(retentionForecast, null, 2)}</pre>
      ) : (
        <p>Loading retention forecasts...</p>
      )}
    </div>
  );
};

export default AITalentRetentionDashboard;
