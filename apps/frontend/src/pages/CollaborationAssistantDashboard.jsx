import { useEffect, useState } from "react";
import { fetchCollaborationInsights } from "../services/collaborationAssistantService";

// AI-powered workforce collaboration insights

const CollaborationAssistantDashboard = () => {
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchCollaborationInsights();
      setInsights(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤝 Workforce Collaboration Insights</h2>
      {insights ? (
        <pre className="mt-4 border p-4 rounded">{JSON.stringify(insights, null, 2)}</pre>
      ) : (
        <p>Loading collaboration insights...</p>
      )}
    </div>
  );
};

export default CollaborationAssistantDashboard;
