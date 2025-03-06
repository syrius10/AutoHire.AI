import { useEffect, useState } from "react";
import { fetchProductivityTokens } from "../services/productivityTokensService";

// AI-powered work productivity token tracking & incentive rewards.

const ProductivityTokensDashboard = () => {
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    fetchProductivityTokens().then(setTokens);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🎯 Productivity Token Rewards</h2>
      {tokens ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Earned Tokens:</strong> {tokens.total}</p>
          <p><strong>Work Hours:</strong> {tokens.work_hours}</p>
          <p><strong>Task Completion Rate:</strong> {tokens.task_completion_rate}%</p>
        </div>
      ) : (
        <p>Loading productivity tokens...</p>
      )}
    </div>
  );
};

export default ProductivityTokensDashboard;
