import { useEffect, useState } from "react";
import { fetchSelfAwareAutomation } from "../services/selfAwareAutomationService";

// AI-driven self-aware workforce automation insights.

const SelfAwareAutomationDashboard = () => {
  const [status, setStatus] = useState(null);
  const [metrics, setMetrics] = useState({
    systemLoad: "",
    errorRate: "",
    taskCompletion: "",
  });

  const handleAnalyze = async () => {
    const result = await fetchSelfAwareAutomation(metrics);
    setStatus(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 Self-Aware AI Workforce Automation</h2>
      <div className="mt-4">
        <input
          type="number"
          className="border p-2 rounded w-full"
          placeholder="System Load (%)"
          value={metrics.systemLoad}
          onChange={(e) => setMetrics({ ...metrics, systemLoad: e.target.value })}
        />
        <input
          type="number"
          className="border p-2 rounded w-full mt-2"
          placeholder="Error Rate (%)"
          value={metrics.errorRate}
          onChange={(e) => setMetrics({ ...metrics, errorRate: e.target.value })}
        />
        <input
          type="number"
          className="border p-2 rounded w-full mt-2"
          placeholder="Task Completion (%)"
          value={metrics.taskCompletion}
          onChange={(e) => setMetrics({ ...metrics, taskCompletion: e.target.value })}
        />
        <button onClick={handleAnalyze} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Analyze AI Awareness
        </button>
      </div>
      {status && (
        <div className="mt-4 border p-4 rounded">
          <p><strong>AI Automation Status:</strong> {status}</p>
        </div>
      )}
    </div>
  );
};

export default SelfAwareAutomationDashboard;
