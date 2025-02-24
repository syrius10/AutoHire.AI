import { useState, useEffect } from "react";
import { getWorkforceCostForecast } from "../services/workforceInsightsService";

const WorkforceCostDashboard = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    getWorkforceCostForecast({ year: 2025, hiring_budget: 800000 }).then(setForecast);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Workforce Cost Analysis</h2>
      {forecast ? (
        <p>Predicted Employee Count: {forecast.forecasted_employee_count}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WorkforceCostDashboard;