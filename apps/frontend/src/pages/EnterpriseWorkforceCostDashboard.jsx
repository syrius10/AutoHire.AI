import { useEffect, useState } from "react";
import { getCostForecast } from "../services/workforceCostService";

// Displays AI-driven hiring cost insights.

const EnterpriseWorkforceCostDashboard = () => {
  const [costData, setCostData] = useState(null);

  useEffect(() => {
    getCostForecast().then(setCostData).catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">💰 Workforce Cost Insights</h2>
      {costData ? (
        <div className="mt-4">
          <p>📊 Estimated Hiring Cost: ${costData.estimatedCost}</p>
          <p>💼 Budget Allocation: {costData.budgetAllocation}</p>
        </div>
      ) : (
        <p>Loading cost insights...</p>
      )}
    </div>
  );
};

export default EnterpriseWorkforceCostDashboard;
