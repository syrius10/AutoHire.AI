import { useEffect, useState } from "react";
import { fetchBurnoutRisk } from "../services/burnoutPreventionService.js";

// AI-based stress-free, burnout-preventive work models.

const BurnoutPreventionDashboard = () => {
  const [burnoutRisk, setBurnoutRisk] = useState(null);

  useEffect(() => {
    fetchBurnoutRisk(10, 8, 6).then(setBurnoutRisk);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔥 Burnout Prevention Insights</h2>
      {burnoutRisk ? (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Burnout Risk Level:</strong> {burnoutRisk.risk}
          </p>
        </div>
      ) : (
        <p>Loading burnout risk insights...</p>
      )}
    </div>
  );
};

export default BurnoutPreventionDashboard;
