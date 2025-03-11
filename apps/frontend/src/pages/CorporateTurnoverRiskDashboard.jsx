import { useEffect, useState } from "react";
import { getTurnoverRiskAnalysis } from "../services/corporateTurnoverRiskService";

// Analyzes company-wide attrition risk.

const CorporateTurnoverRiskDashboard = () => {
  const [turnoverData, setTurnoverData] = useState(null);

  useEffect(() => {
    getTurnoverRiskAnalysis().then(setTurnoverData).catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        📉 Corporate Turnover Risk Analysis
      </h2>
      {turnoverData ? (
        <div className="mt-4">
          <p>🔍 Predicted Attrition Rate: {turnoverData.attritionRate}%</p>
          <p>⚠️ Key Risk Factors: {turnoverData.riskFactors.join(", ")}</p>
        </div>
      ) : (
        <p>Loading turnover risk insights...</p>
      )}
    </div>
  );
};

export default CorporateTurnoverRiskDashboard;
