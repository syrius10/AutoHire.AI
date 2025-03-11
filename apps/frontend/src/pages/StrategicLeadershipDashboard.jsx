import { useEffect, useState } from "react";
import { fetchLeadershipPotential } from "../services/strategicLeadershipService";

// AI-based leadership talent analysis & predictions.

export default function StrategicLeadershipDashboard() {
  const [leadershipData, setLeadershipData] = useState(null);

  useEffect(() => {
    async function loadLeadershipData() {
      const data = await fetchLeadershipPotential(7, 92, 5); // Example input
      setLeadershipData(data);
    }
    loadLeadershipData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        🏆 AI Strategic Leadership Analysis
      </h2>
      {leadershipData ? (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Leadership Potential:</strong>{" "}
            {leadershipData.leadershipPotential}
          </p>
        </div>
      ) : (
        <p>Loading strategic leadership insights...</p>
      )}
    </div>
  );
}
