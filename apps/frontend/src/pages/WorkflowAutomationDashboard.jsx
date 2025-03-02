import { useEffect, useState } from "react";
import { fetchWorkflowAutomation } from "../services/workflowAutomationService";

// AI-powered workflow optimization & automation

export default function WorkflowAutomationDashboard() {
  const [workflowOptimization, setWorkflowOptimization] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchWorkflowAutomation();
      setWorkflowOptimization(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚙️ Workflow Automation</h2>
      {workflowOptimization ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Optimization Suggestion:</strong> {workflowOptimization.suggestion}</p>
        </div>
      ) : (
        <p>Loading workflow automation insights...</p>
      )}
    </div>
  );
}
