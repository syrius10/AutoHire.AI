import { useEffect, useState } from "react";
import { fetchEngagementInsights } from "../services/aiEmployeeEngagementService";

// Monitors AI-driven workforce engagement.

const AIEmployeeEngagementDashboard = () => {
  const [engagementData, setEngagementData] = useState(null);

  useEffect(() => {
    fetchEngagementInsights().then(setEngagementData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 AI-Driven Employee Engagement</h2>
      {engagementData ? (
        <pre className="mt-4 p-4 border rounded">{JSON.stringify(engagementData, null, 2)}</pre>
      ) : (
        <p>Loading engagement insights...</p>
      )}
    </div>
  );
};

export default AIEmployeeEngagementDashboard;
