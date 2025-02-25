import { useEffect, useState } from "react";
import { fetchBurnoutRisk } from "../services/burnoutRiskService";

const BurnoutRiskDashboard = () => {
  const [burnoutData, setBurnoutData] = useState(null);

  useEffect(() => {
    fetchBurnoutRisk().then(setBurnoutData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔥 Burnout Risk</h2>
      {burnoutData ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Burnout Risk Level:</strong> {burnoutData.riskLevel}</p>
          <p><strong>Workload Impact:</strong> {burnoutData.workloadImpact}</p>
        </div>
      ) : (
        <p>Loading burnout risk data...</p>
      )}
    </div>
  );
};

export default BurnoutRiskDashboard;
