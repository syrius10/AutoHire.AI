export const fetchWorkflowOptimization = async (taskType, urgencyLevel, workload) => {
    try {
      const response = await fetch("/api/adaptive-workflow/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskType, urgencyLevel, workload }),
      });
      const data = await response.json();
      return data.optimizedWorkflow;
    } catch (error) {
      console.error("Error optimizing workflow:", error);
      return "Error optimizing workflow.";
    }
  };
  