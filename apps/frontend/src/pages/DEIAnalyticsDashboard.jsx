import { useEffect, useState } from "react";
import { fetchDEIAnalytics } from "../services/deiAnalyticsService";

// AI-driven DEI analytics & insights

export default function DEIAnalyticsDashboard() {
  const [deiInsights, setDEIInsights] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchDEIAnalytics();
      setDEIInsights(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 DEI Analytics Dashboard</h2>
      {deiInsights ? (
        <pre className="mt-4 p-4 border rounded">{JSON.stringify(deiInsights, null, 2)}</pre>
      ) : (
        <p>Loading DEI insights...</p>
      )}
    </div>
  );
}
