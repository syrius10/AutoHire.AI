import { useState } from "react";
import { fetchWorkflowOptimization } from "../services/adaptiveWorkflowService";

const AdaptiveWorkflowDashboard = () => {
  const [taskType, setTaskType] = useState("");
  const [urgencyLevel, setUrgencyLevel] = useState("");
  const [workload, setWorkload] = useState("");
  const [optimizationResult, setOptimizationResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchWorkflowOptimization(
      taskType,
      urgencyLevel,
      workload,
    );
    setOptimizationResult(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔄 Adaptive Workflow Optimization</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label htmlFor="taskType">Task Type:</label>
          <input
            id="taskType"
            type="text"
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="urgencyLevel">Urgency Level (1-10):</label>
          <input
            id="urgencyLevel"
            type="number"
            value={urgencyLevel}
            onChange={(e) => setUrgencyLevel(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="workload">Workload (1-10):</label>
          <input
            id="workload"
            type="number"
            value={workload}
            onChange={(e) => setWorkload(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Optimize Workflow
        </button>
      </form>
      {optimizationResult && (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Optimization Result:</strong> {optimizationResult}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdaptiveWorkflowDashboard;
