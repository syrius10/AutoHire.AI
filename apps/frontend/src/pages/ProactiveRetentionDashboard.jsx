import { useEffect, useState } from "react";
import { fetchRetentionRisk } from "../services/proactiveRetentionService";

const ProactiveRetentionDashboard = () => {
  const [retentionData, setRetentionData] = useState(null);

  useEffect(() => {
    fetchRetentionRisk().then(setRetentionData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔄 Retention Risk Analysis</h2>
      {retentionData ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Retention Risk:</strong> {retentionData.riskLevel}</p>
          <p><strong>Key Drivers:</strong> {retentionData.drivers}</p>
        </div>
      ) : (
        <p>Loading retention risk data...</p>
      )}
    </div>
  );
};

export default ProactiveRetentionDashboard;
