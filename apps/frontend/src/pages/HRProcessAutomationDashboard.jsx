import { useEffect, useState } from "react";
import { fetchHRProcessAutomation } from "../services/hrProcessAutomationService";

// Displays AI-driven HR process automation

export default function HRProcessAutomationDashboard() {
  const [automationResults, setAutomationResults] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchHRProcessAutomation();
      setAutomationResults(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 HR Process Automation</h2>
      {automationResults ? (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Automation Insights:</strong> {automationResults.result}
          </p>
        </div>
      ) : (
        <p>Loading HR automation insights...</p>
      )}
    </div>
  );
}
