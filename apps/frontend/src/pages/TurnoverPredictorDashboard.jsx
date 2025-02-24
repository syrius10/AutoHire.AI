import { useEffect, useState } from "react";
import { fetchTurnoverRisk } from "../services/turnoverPredictorService";

// Monitors employee turnover risks.

const TurnoverPredictorDashboard = () => {
  const [turnover, setTurnover] = useState(null);

  useEffect(() => {
    fetchTurnoverRisk().then(setTurnover);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🚨 Employee Turnover Risk</h2>
      {turnover ? (
        <p className="mt-4">Turnover Probability: {turnover.risk}%</p>
      ) : (
        <p>Loading turnover risk...</p>
      )}
    </div>
  );
};

export default TurnoverPredictorDashboard;
