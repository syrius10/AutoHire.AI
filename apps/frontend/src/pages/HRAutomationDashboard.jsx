import { useEffect, useState } from "react";
import { fetchHRAutomationInsights } from "../services/hrAutomationService";

// AI-driven HR automation insights & workflow management.

const HRAutomationDashboard = () => {
  const [automationData, setAutomationData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchHRAutomationInsights();
      setAutomationData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 AI-Powered HR Automation</h2>
      {automationData ? (
        <pre className="mt-4 border p-4 rounded">{JSON.stringify(automationData, null, 2)}</pre>
      ) : (
        <p>Loading HR automation insights...</p>
      )}
    </div>
  );
};

export default HRAutomationDashboard;
