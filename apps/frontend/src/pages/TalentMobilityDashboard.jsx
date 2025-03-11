import { useEffect, useState } from "react";
import { getTalentMobilityInsights } from "../services/talentMobilityService";

// Tracks internal job transitions & promotions.

const TalentMobilityDashboard = () => {
  const [mobilityData, setMobilityData] = useState(null);

  useEffect(() => {
    getTalentMobilityInsights().then(setMobilityData).catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔄 Talent Mobility Insights</h2>
      {mobilityData ? (
        <ul className="mt-4">
          {mobilityData.recommendations.map((move) => (
            <li key={move.id} className="border p-2 mt-2 rounded">
              {move.employee} ➝ {move.newRole} ({move.reason})
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading mobility insights...</p>
      )}
    </div>
  );
};

export default TalentMobilityDashboard;
