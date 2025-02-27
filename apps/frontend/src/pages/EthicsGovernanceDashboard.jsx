import { useEffect, useState } from "react";
import { fetchEthicsInsights } from "../services/ethicsGovernanceService";

// AI-powered ethical hiring & decision enforcement.

const EthicsGovernanceDashboard = () => {
  const [ethicsData, setEthicsData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchEthicsInsights();
      setEthicsData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🛡️ AI-Powered Ethical Hiring</h2>
      {ethicsData ? (
        <pre className="mt-4 border p-4 rounded">{JSON.stringify(ethicsData, null, 2)}</pre>
      ) : (
        <p>Loading ethical governance insights...</p>
      )}
    </div>
  );
};

export default EthicsGovernanceDashboard;
