import { useEffect, useState } from "react";
import { fetchGlobalEconomyInsights } from "../services/aiGlobalEconomyService";

const AIGlobalEconomyDashboard = () => {
  const [economyData, setEconomyData] = useState(null);

  useEffect(() => {
    fetchGlobalEconomyInsights().then(setEconomyData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🌍 AI-Driven Global Economy & Employment Policies</h2>
      {economyData ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Job Market Trends:</strong> {economyData.jobMarketTrends}</p>
          <p><strong>Policy Recommendations:</strong> {economyData.policyRecommendations}</p>
        </div>
      ) : (
        <p>Loading employment economy insights...</p>
      )}
    </div>
  );
};

export default AIGlobalEconomyDashboard;
