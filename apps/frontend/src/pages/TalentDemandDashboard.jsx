import { useEffect, useState } from "react";
import { fetchTalentForecast } from "../services/predictiveTalentService";

// Visualizes AI-driven hiring demand forecasts.

const TalentDemandDashboard = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    fetchTalentForecast().then(setForecast);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Talent Demand Forecast</h2>
      {forecast ? (
        <p className="mt-4">Predicted Hiring Demand: {forecast.demand}</p>
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  );
};

export default TalentDemandDashboard;
