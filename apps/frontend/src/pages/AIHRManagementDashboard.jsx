import { useEffect, useState } from "react";
import { fetchHRAutomationInsights } from "../services/aiHRManagementService";

// Tracks AI-driven HR automation processes.

const AIHRManagementDashboard = () => {
  const [automationInsights, setAutomationInsights] = useState(null);

  useEffect(() => {
    fetchHRAutomationInsights().then(setAutomationInsights);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 AI-Powered HR Automation</h2>
      {automationInsights ? (
        <pre className="mt-4 p-4 border rounded">{JSON.stringify(automationInsights, null, 2)}</pre>
      ) : (
        <p>Loading automation insights...</p>
      )}
    </div>
  );
};

export default AIHRManagementDashboard;
