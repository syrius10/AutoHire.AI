import { useEffect, useState } from "react";
import { fetchAutonomousTeams } from "../services/autonomousTeamService";

// AI-driven self-organizing workforce team insights

const AutonomousTeamDashboard = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function loadTeams() {
      const data = await fetchAutonomousTeams();
      setTeams(data);
    }
    loadTeams();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 AI-Driven Workforce Teams</h2>
      {teams.length > 0 ? (
        <ul className="mt-4 border p-4 rounded">
          {teams.map((team, index) => (
            <li key={index} className="p-2 border-b">{team.name} - {team.specialization}</li>
          ))}
        </ul>
      ) : (
        <p>Loading workforce team insights...</p>
      )}
    </div>
  );
};

export default AutonomousTeamDashboard;
