import { useEffect, useState } from "react";
import { fetchAIOnlyManagementData } from "../services/aiOnlyManagementService";

// AI-powered AI-only hiring, management & operations.

export default function AIOnlyManagementDashboard() {
  const [managementData, setManagementData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchAIOnlyManagementData();
      setManagementData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤯 AI-Only Hiring & Management</h2>
      {managementData ? (
        <pre className="mt-4 border p-4 rounded bg-gray-100">{JSON.stringify(managementData, null, 2)}</pre>
      ) : (
        <p>Loading AI-only management insights...</p>
      )}
    </div>
  );
}
