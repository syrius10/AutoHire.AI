import { useEffect, useState } from "react";
import { fetchAutonomousPolicy } from "../services/aiAutonomousPolicyService";

// AI-powered autonomous workforce policy generation

const AIAutonomousPolicyDashboard = () => {
  const [policyData, setPolicyData] = useState(null);

  useEffect(() => {
    fetchAutonomousPolicy().then(setPolicyData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📑 AI Workforce Policy Generator</h2>
      {policyData ? (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Policy:</strong> {policyData.policy}
          </p>
          <p>
            <strong>Impact Score:</strong> {policyData.impact_score}%
          </p>
        </div>
      ) : (
        <p>Loading AI workforce policy data...</p>
      )}
    </div>
  );
};

export default AIAutonomousPolicyDashboard;
