import { useEffect, useState } from "react";
import { fetchQuantumWorkforceForecast } from "../services/quantumWorkforceForecastService";

// AI-driven real-time workforce forecasting visualization.

export default function QuantumWorkforceForecastDashboard() {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchQuantumWorkforceForecast();
      setForecastData(data);
    }
    loadData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Quantum Workforce Forecasting</h1>
      {forecastData ? (
        <pre>{JSON.stringify(forecastData, null, 2)}</pre>
      ) : (
        <p>Loading forecast data...</p>
      )}
    </div>
  );
}
