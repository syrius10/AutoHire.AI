import { useState, useEffect } from "react";
import { updateWorkflow } from "../services/workflowService";
import WorkflowEditor from "./WorkflowEditor";

const WorkflowDashboard = () => {
  const [workflow, setWorkflow] = useState([]);

  useEffect(() => {
    setWorkflow(["Screening", "Interview", "Offer", "Hired"]);
  }, []);

  const handleSave = async () => {
    await updateWorkflow(workflow);
    alert("Workflow saved successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Hiring Workflow Editor</h2>
      <WorkflowEditor workflow={workflow} setWorkflow={setWorkflow} />
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white"
        onClick={handleSave}
      >
        Save Workflow
      </button>
    </div>
  );
};

export default WorkflowDashboard;
