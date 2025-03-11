import { useEffect, useState } from "react";
import { fetchWorkloadOptimization } from "../services/workloadBalancingService";

// AI-driven Workload Optimization & Burnout Prevention

const WorkloadBalancingDashboard = () => {
  const [workloadPlan, setWorkloadPlan] = useState(null);

  useEffect(() => {
    async function loadWorkloadPlan() {
      const data = await fetchWorkloadOptimization("12345"); // Example employee ID
      setWorkloadPlan(data);
    }
    loadWorkloadPlan();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        📊 Workload Balancing & Burnout Prevention
      </h2>
      {workloadPlan ? (
        <pre className="mt-4 p-4 border rounded bg-gray-100">
          {JSON.stringify(workloadPlan, null, 2)}
        </pre>
      ) : (
        <p>Loading workload optimization data...</p>
      )}
    </div>
  );
};

export default WorkloadBalancingDashboard;
