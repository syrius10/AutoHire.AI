import { useEffect, useState } from "react";
import { fetchEarningsForecast } from "../services/earningsForecastService";

// Predicts earnings for freelance workers.

const EarningsForecastDashboard = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    async function loadForecastData() {
      const data = await fetchEarningsForecast();
      setForecastData(data);
    }
    loadForecastData();
  }, []);

  return (
    <div>
      <h2>💰 Earnings Forecast</h2>
      <ul>
        {forecastData.map((forecast, index) => (
          <li key={index}>
            {forecast.role}: Projected Earnings: ${forecast.estimatedEarnings} | Demand: {forecast.demandLevel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EarningsForecastDashboard;
