import { useState, useEffect } from "react";
import { getEfficiencyAnalysis } from "../services/workforceInsightsService";

const EfficiencyTrackingDashboard = () => {
  const [efficiency, setEfficiency] = useState(null);

  useEffect(() => {
    getEfficiencyAnalysis({ year: 2025, job_postings: 150 }).then(
      setEfficiency,
    );
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚡ Hiring Efficiency Analysis</h2>
      {efficiency ? (
        <p>Predicted Time to Hire: {efficiency.predicted_time_to_hire} days</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EfficiencyTrackingDashboard;
