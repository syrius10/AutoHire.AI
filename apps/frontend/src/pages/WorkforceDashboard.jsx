import { useEffect, useState } from "react";
import { getWorkforceForecast } from "../services/workforceService";

const WorkforceDashboard = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    getWorkforceForecast({
      year: 2025,
      quarter: 2,
      industry_growth_rate: 3.5,
      job_postings: 5000,
    }).then(setForecast);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Workforce Insights</h2>
      {forecast && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow-md">
          <h4 className="text-lg font-semibold">Projected Hiring Needs</h4>
          <p>
            Estimated workforce demand: <strong>{forecast.forecast}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default WorkforceDashboard;
