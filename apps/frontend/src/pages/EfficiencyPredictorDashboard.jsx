import { useEffect, useState } from "react";
import { fetchEfficiencyData } from "../services/efficiencyPredictorService";

// Tracks workforce productivity & efficiency improvements.

const EfficiencyPredictorDashboard = () => {
  const [efficiency, setEfficiency] = useState(null);

  useEffect(() => {
    fetchEfficiencyData().then(setEfficiency);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚡ Workforce Efficiency Analysis</h2>
      {efficiency ? (
        <p className="mt-4">Efficiency Score: {efficiency.score}%</p>
      ) : (
        <p>Loading efficiency data...</p>
      )}
    </div>
  );
};

export default EfficiencyPredictorDashboard;
