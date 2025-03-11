import { useEffect, useState } from "react";
import { fetchAIGovernanceData } from "../services/aiGovernanceService";

// AI-powered workforce governance monitoring

const AIGovernanceDashboard = () => {
  const [governanceData, setGovernanceData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchAIGovernanceData();
      setGovernanceData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚖️ AI Governance Monitoring</h2>
      {governanceData ? (
        <pre className="mt-4 border p-4 rounded">
          {JSON.stringify(governanceData, null, 2)}
        </pre>
      ) : (
        <p>Loading governance data...</p>
      )}
    </div>
  );
};

export default AIGovernanceDashboard;
