import { useEffect, useState } from "react";
import { fetchJobMarketTrends } from "../services/aiJobMarketAnalysisService";

// AI-powered real-time job market insights

const AIJobMarketAnalysisDashboard = () => {
  const [marketTrends, setMarketTrends] = useState(null);

  useEffect(() => {
    fetchJobMarketTrends().then(setMarketTrends);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 AI Job Market Insights</h2>
      {marketTrends ? (
        <pre className="mt-4 p-4 border rounded bg-gray-100">
          {JSON.stringify(marketTrends, null, 2)}
        </pre>
      ) : (
        <p>Loading job market trends...</p>
      )}
    </div>
  );
};

export default AIJobMarketAnalysisDashboard;
