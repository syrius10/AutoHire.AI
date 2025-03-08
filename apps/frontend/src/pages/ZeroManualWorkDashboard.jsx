import { useEffect, useState } from "react";
import { fetchAutomationInsights } from "../services/zeroManualWorkService";

// AI-powered full company workforce automation monitoring.

export default function ZeroManualWorkDashboard() {
  const [automationData, setAutomationData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchAutomationInsights();
      setAutomationData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🚀 Full Company Workforce Automation</h2>
      {automationData ? (
        <pre className="mt-4 border p-4 rounded bg-gray-100">{JSON.stringify(automationData, null, 2)}</pre>
      ) : (
        <p>Loading automation insights...</p>
      )}
    </div>
  );
}
