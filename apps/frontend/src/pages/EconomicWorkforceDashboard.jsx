import { useEffect, useState } from "react";
import { fetchEconomicWorkforceData } from "../services/economicWorkforceService";

// AI-driven economic workforce predictions & hiring trends.

export default function EconomicWorkforceDashboard() {
  const [workforceData, setWorkforceData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchEconomicWorkforceData();
      setWorkforceData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Economic Workforce Predictions</h2>
      {workforceData ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Hiring Demand:</strong> {workforceData.hiringDemand}</p>
          <p><strong>GDP Growth Impact:</strong> {workforceData.gdpGrowthImpact}</p>
        </div>
      ) : (
        <p>Loading workforce predictions...</p>
      )}
    </div>
  );
}
