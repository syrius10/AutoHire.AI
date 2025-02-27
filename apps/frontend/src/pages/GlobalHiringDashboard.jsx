import { useEffect, useState } from "react";
import { fetchHiringRecommendations } from "../services/globalHiringService";

// AI-powered international hiring & relocation insights.

export default function GlobalHiringDashboard() {
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchHiringRecommendations({
        skillsDemand: "Tech, AI, Data Science",
        talentAvailability: "High",
        relocationFeasibility: "Medium",
      });
      setRecommendations(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🌍 Global Hiring Insights</h2>
      {recommendations ? (
        <pre className="mt-4 border p-4 rounded bg-gray-100">{JSON.stringify(recommendations, null, 2)}</pre>
      ) : (
        <p>Loading hiring recommendations...</p>
      )}
    </div>
  );
}
