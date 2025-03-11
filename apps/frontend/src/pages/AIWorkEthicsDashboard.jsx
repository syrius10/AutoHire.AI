import { useEffect, useState } from "react";
import { fetchWorkEthicsCompliance } from "../services/aiWorkEthicsService";

// AI-powered work ethics compliance monitoring

const AIWorkEthicsDashboard = () => {
  const [ethicsData, setEthicsData] = useState(null);

  useEffect(() => {
    fetchWorkEthicsCompliance().then(setEthicsData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📜 AI Work Ethics Compliance</h2>
      {ethicsData ? (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Guideline:</strong> {ethicsData.guideline}
          </p>
          <p>
            <strong>Compliance Score:</strong> {ethicsData.compliance_score}%
          </p>
        </div>
      ) : (
        <p>Loading AI work ethics compliance data...</p>
      )}
    </div>
  );
};

export default AIWorkEthicsDashboard;
