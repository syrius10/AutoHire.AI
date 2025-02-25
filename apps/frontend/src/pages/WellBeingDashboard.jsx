import { useEffect, useState } from "react";
import { fetchWellBeingRecommendations } from "../services/wellBeingRecommendationService";

const WellBeingDashboard = () => {
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    fetchWellBeingRecommendations().then(setRecommendations);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">💆 Well-Being Insights</h2>
      {recommendations ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Recommendation:</strong> {recommendations.suggestion}</p>
          <p><strong>Stress Level:</strong> {recommendations.stressLevel}</p>
        </div>
      ) : (
        <p>Loading well-being recommendations...</p>
      )}
    </div>
  );
};

export default WellBeingDashboard;
