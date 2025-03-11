import { useEffect, useState } from "react";
import { fetchWellnessTracking } from "../services/realTimeWellnessService";

// AI-powered mental wellness tracking & recommendations.

const RealTimeWellnessDashboard = () => {
  const [wellnessReport, setWellnessReport] = useState(null);

  useEffect(() => {
    async function loadWellnessData() {
      const data = await fetchWellnessTracking();
      setWellnessReport(data);
    }
    loadWellnessData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🧘 Real-Time Wellness Tracking</h2>
      {wellnessReport ? (
        <div className="mt-4 border p-4 rounded bg-green-100">
          <p>
            <strong>Wellness Score:</strong> {wellnessReport.wellnessScore}
          </p>
        </div>
      ) : (
        <p>Loading wellness data...</p>
      )}
    </div>
  );
};

export default RealTimeWellnessDashboard;
