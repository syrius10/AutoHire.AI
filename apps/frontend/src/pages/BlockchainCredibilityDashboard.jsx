import { useEffect, useState } from "react";
import { fetchBlockchainCredibility } from "../services/blockchainCredibilityService";

// AI-based freelancer credibility scoring via blockchain

export default function BlockchainCredibilityDashboard() {
  const [credibilityScore, setCredibilityScore] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchBlockchainCredibility();
      setCredibilityScore(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔗 Blockchain Credibility Score</h2>
      {credibilityScore ? (
        <pre className="mt-4 p-4 border rounded bg-gray-100">
          {JSON.stringify(credibilityScore, null, 2)}
        </pre>
      ) : (
        <p>Loading blockchain credibility score...</p>
      )}
    </div>
  );
}
