import { useEffect, useState } from "react";
import { fetchAIWorkAssistant } from "../services/aiWorkAssistantService";

// AI-powered virtual work assistants & real-time productivity tracking.

export default function AIWorkAssistantDashboard() {
  const [assistantData, setAssistantData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchAIWorkAssistant();
      setAssistantData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 AI Work Assistant</h2>
      {assistantData ? (
        <div className="mt-4 border p-4 rounded">
          <pre>{JSON.stringify(assistantData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading AI work assistant insights...</p>
      )}
    </div>
  );
}
