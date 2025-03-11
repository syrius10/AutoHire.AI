import { useEffect, useState } from "react";
import { fetchEconomicForecast } from "../services/economicForecastService";

// AI-based employer-employee economic forecast models.

export default function EconomicForecastDashboard() {
  const [economicForecast, setEconomicForecast] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchEconomicForecast();
      setEconomicForecast(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📈 Economic Forecast</h2>
      {economicForecast ? (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Average Salary Projection:</strong>{" "}
            {economicForecast.avgSalaryProjection}
          </p>
          <p>
            <strong>Inflation Impact:</strong>{" "}
            {economicForecast.inflationEffect}
          </p>
        </div>
      ) : (
        <p>Loading economic forecast...</p>
      )}
    </div>
  );
}
