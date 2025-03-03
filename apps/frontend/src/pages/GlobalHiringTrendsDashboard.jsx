import { useEffect, useState } from "react";
import { fetchGlobalHiringTrends } from "../services/globalHiringTrendsService";

// AI-powered insights into future hiring demands.

export default function GlobalHiringTrendsDashboard() {
  const [hiringTrends, setHiringTrends] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchGlobalHiringTrends();
      setHiringTrends(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🌎 Global Hiring Trends</h2>
      {hiringTrends ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Industry Growth:</strong> {hiringTrends.industryGrowth}</p>
          <p><strong>Remote Work Trends:</strong> {hiringTrends.remoteWorkImpact}</p>
          <p><strong>AI Adoption:</strong> {hiringTrends.aiImpact}</p>
        </div>
      ) : (
        <p>Loading hiring trends...</p>
      )}
    </div>
  );
}
