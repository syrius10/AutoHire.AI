import { useEffect, useState } from "react";
import { fetchCollaborationTracking } from "../services/collaborationTrackingService";

// AI-driven productivity monitoring & team collaboration tracking

const CollaborationTrackingDashboard = () => {
  const [productivityScore, setProductivityScore] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchCollaborationTracking();
      setProductivityScore(data.score);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 AI-Powered Productivity Insights</h2>
      {productivityScore !== null ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Productivity Score:</strong> {productivityScore}</p>
        </div>
      ) : (
        <p>Loading productivity analysis...</p>
      )}
    </div>
  );
};

export default CollaborationTrackingDashboard;
