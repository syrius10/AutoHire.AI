import { useEffect, useState } from "react";
import { fetchWellBeingPlan } from "../services/wellBeingService";
import { fetchWellBeingRecommendations } from "../services/wellBeingRecommendationService";

export default function WellBeingDashboard() {
  const [wellBeingPlan, setWellBeingPlan] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    async function loadData() {
      const planData = await fetchWellBeingPlan();
      const recommendationData = await fetchWellBeingRecommendations();

      setWellBeingPlan(planData);
      setRecommendations(recommendationData);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">💆 AI-Powered Well-Being Insights</h2>

      {/* Well-Being Plan Section */}
      <div className="mt-6 p-4 border rounded">
        <h3 className="text-lg font-semibold">📋 Personalized Well-Being Plan</h3>
        {wellBeingPlan ? (
          <pre className="mt-2 bg-gray-100 p-2 rounded">{JSON.stringify(wellBeingPlan, null, 2)}</pre>
        ) : (
          <p>Loading well-being plan...</p>
        )}
      </div>

      {/* Well-Being Recommendations Section */}
      <div className="mt-6 p-4 border rounded">
        <h3 className="text-lg font-semibold">💡 AI Recommendations</h3>
        {recommendations ? (
          <div className="mt-2">
            <p><strong>Suggestion:</strong> {recommendations.suggestion}</p>
            <p><strong>Stress Level:</strong> {recommendations.stressLevel}</p>
          </div>
        ) : (
          <p>Loading well-being recommendations...</p>
        )}
      </div>
    </div>
  );
}
