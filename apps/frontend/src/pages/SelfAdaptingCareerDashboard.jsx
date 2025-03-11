import { useEffect, useState } from "react";
import { fetchCareerProgression } from "../services/selfAdaptingCareerService";

// AI-powered career progression automation & adaptability tracking.

const SelfAdaptingCareerDashboard = () => {
  const [careerProgression, setCareerProgression] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchCareerProgression(8, "Advanced");
      setCareerProgression(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🚀 AI-Powered Career Progression</h2>
      {careerProgression ? (
        <div className="mt-4 border p-4 rounded bg-white shadow">
          <p>
            <strong>Career Prediction:</strong>{" "}
            {careerProgression.careerGrowthPrediction}
          </p>
        </div>
      ) : (
        <p>Loading career predictions...</p>
      )}
    </div>
  );
};

export default SelfAdaptingCareerDashboard;
