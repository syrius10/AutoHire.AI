import { useEffect, useState } from "react";
import { fetchTeamMoodOptimization } from "../services/teamMoodOptimizationService";

// AI-driven team collaboration optimization using sentiment analysis.

const TeamMoodOptimizationDashboard = () => {
  const [moodOptimization, setMoodOptimization] = useState(null);

  useEffect(() => {
    async function loadMoodOptimization() {
      const data = await fetchTeamMoodOptimization();
      setMoodOptimization(data);
    }
    loadMoodOptimization();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">😊 Team Mood Optimization</h2>
      {moodOptimization ? (
        <div className="mt-4 border p-4 rounded bg-blue-100">
          <p><strong>Suggestion:</strong> {moodOptimization.teamMoodOptimization}</p>
        </div>
      ) : (
        <p>Loading team mood insights...</p>
      )}
    </div>
  );
};

export default TeamMoodOptimizationDashboard;
