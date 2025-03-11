import { useEffect, useState } from "react";
import { fetchHRPolicyRecommendations } from "../services/emotionAwareHRPolicyService";

// AI-powered HR policy recommendations & adaptive scheduling.

const EmotionAwareHRPolicyDashboard = () => {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    async function loadPolicy() {
      const data = await fetchHRPolicyRecommendations();
      setPolicy(data);
    }
    loadPolicy();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📋 Emotion-Aware HR Policies</h2>
      {policy ? (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <p>
            <strong>Recommendation:</strong> {policy.recommendedPolicy}
          </p>
        </div>
      ) : (
        <p>Loading HR policy recommendations...</p>
      )}
    </div>
  );
};

export default EmotionAwareHRPolicyDashboard;
