import { useEffect, useState } from "react";
import { fetchLeadershipDecision } from "../services/leadershipDecisionService";

// AI-powered Leadership Decision Simulation

const LeadershipDecisionDashboard = () => {
  const [decisionAnalysis, setDecisionAnalysis] = useState(null);

  useEffect(() => {
    async function loadDecisionData() {
      const data = await fetchLeadershipDecision("98765"); // Example leader ID
      setDecisionAnalysis(data);
    }
    loadDecisionData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        🚀 AI Leadership Decision Simulation
      </h2>
      {decisionAnalysis ? (
        <pre className="mt-4 p-4 border rounded bg-gray-100">
          {JSON.stringify(decisionAnalysis, null, 2)}
        </pre>
      ) : (
        <p>Loading leadership decision insights...</p>
      )}
    </div>
  );
};

export default LeadershipDecisionDashboard;
