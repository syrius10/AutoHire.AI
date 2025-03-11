import { useEffect, useState } from "react";
import { fetchHiringForecast } from "../services/predictiveWorkforceService";

// AI-driven workforce planning & hiring forecasts.

const PredictiveWorkforceDashboard = () => {
  const [hiringForecast, setHiringForecast] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchHiringForecast();
      setHiringForecast(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Predictive Workforce Planning</h2>
      {hiringForecast ? (
        <pre className="mt-4 bg-gray-100 p-4 rounded">
          {JSON.stringify(hiringForecast, null, 2)}
        </pre>
      ) : (
        <p>Loading hiring forecast...</p>
      )}
    </div>
  );
};

export default PredictiveWorkforceDashboard;
