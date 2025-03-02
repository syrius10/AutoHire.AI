import { useEffect, useState } from "react";
import { fetchRoleTransition } from "../services/roleTransitionService";

// AI-powered career path evolution insights

export default function RoleTransitionDashboard() {
  const [transition, setTransition] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchRoleTransition({
        roleLevel: "Mid-Level",
        skillMatch: 80,
        jobDemand: "High",
        growthPotential: "Excellent",
      });
      setTransition(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔄 AI-Powered Career Path Evolution</h2>
      {transition ? (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <p><strong>Recommended Next Role:</strong> {transition.transitionSuggestion}</p>
        </div>
      ) : (
        <p>Loading AI-driven role transition insights...</p>
      )}
    </div>
  );
}
