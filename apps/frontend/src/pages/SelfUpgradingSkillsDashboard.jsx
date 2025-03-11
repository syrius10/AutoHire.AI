import { useEffect, useState } from "react";
import { fetchSkillRecommendation } from "../services/selfUpgradingSkillsService";

// AI-driven skill self-improvement & learning paths.

const SelfUpgradingSkillsDashboard = () => {
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchSkillRecommendation("Python", "AI Development");
      setRecommendation(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📚 AI-Driven Skill Upgrading</h2>
      {recommendation ? (
        <div className="mt-4 border p-4 rounded bg-white shadow">
          <p>
            <strong>Recommended Path:</strong>{" "}
            {recommendation.skillRecommendation}
          </p>
        </div>
      ) : (
        <p>Loading skill recommendations...</p>
      )}
    </div>
  );
};

export default SelfUpgradingSkillsDashboard;
