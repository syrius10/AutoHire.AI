import { useEffect, useState } from "react";
import { fetchAIWorkforceData } from "../services/selfManagedAIWorkforceService";

// AI-driven self-managed AI workforce tracking.

export default function SelfManagedAIWorkforceDashboard() {
  const [workforceData, setWorkforceData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchAIWorkforceData();
      setWorkforceData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 AI-Managed Workforce Insights</h2>
      {workforceData ? (
        <pre className="mt-4 border p-4 rounded bg-gray-100">
          {JSON.stringify(workforceData, null, 2)}
        </pre>
      ) : (
        <p>Loading AI workforce data...</p>
      )}
    </div>
  );
}
