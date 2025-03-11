import { useEffect, useState } from "react";
import { fetchReskillingRecommendation } from "../services/adaptiveReskillingService";

// AI-based skill development & reskilling tracking

export default function AdaptiveReskillingDashboard() {
  const [reskillingPlan, setReskillingPlan] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchReskillingRecommendation({
        skillGap: "Cloud Computing",
        learningSpeed: "Medium",
        jobDemand: "High",
      });
      setReskillingPlan(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📚 AI-Powered Reskilling Plan</h2>
      {reskillingPlan ? (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <p>
            <strong>Suggested Training:</strong>{" "}
            {reskillingPlan.reskillingRecommendation}
          </p>
        </div>
      ) : (
        <p>Loading AI-powered reskilling insights...</p>
      )}
    </div>
  );
}
