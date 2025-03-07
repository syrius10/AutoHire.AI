import { useEffect, useState } from "react";
import { fetchProductivityInsights, fetchProductivityTips } from "../services/realTimeProductivityService";

const RealTimeProductivityDashboard = () => {
  const [insights, setInsights] = useState(null);
  const [tips, setTips] = useState(null);

  useEffect(() => {
    async function loadData() {
      const insightsData = await fetchProductivityInsights();
      const tipsData = await fetchProductivityTips();
      setInsights(insightsData);
      setTips(tipsData);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Real-Time Productivity Tracking</h2>
      {insights ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Insights:</strong> {insights}</p>
        </div>
      ) : (
        <p>Loading productivity insights...</p>
      )}
      {tips ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Productivity Tips:</strong> {tips}</p>
        </div>
      ) : (
        <p>Loading coaching tips...</p>
      )}
    </div>
  );
};

export default RealTimeProductivityDashboard;
