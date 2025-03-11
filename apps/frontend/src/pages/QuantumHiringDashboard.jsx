import { useEffect, useState } from "react";
import { fetchQuantumHiringInsights } from "../services/quantumHiringService";

const QuantumHiringDashboard = () => {
  const [hiringData, setHiringData] = useState(null);

  useEffect(() => {
    fetchQuantumHiringInsights().then(setHiringData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        ⚛️ AI-Powered Quantum Hiring Insights
      </h2>
      {hiringData ? (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Quantum Hiring Predictions:</strong>{" "}
            {hiringData.predictions}
          </p>
          <p>
            <strong>AI Job Matching Accuracy:</strong>{" "}
            {hiringData.matchAccuracy}%
          </p>
        </div>
      ) : (
        <p>Loading quantum hiring insights...</p>
      )}
    </div>
  );
};

export default QuantumHiringDashboard;
