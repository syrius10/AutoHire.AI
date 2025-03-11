import { useEffect, useState } from "react";
import { fetchEmployerMatch } from "../services/aiEmployerMatchService";

// AI-based automated hiring & employer matching

const AIEmployerMatchDashboard = () => {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    fetchEmployerMatch().then(setMatchData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔗 AI Employer-Candidate Matching</h2>
      {matchData ? (
        <pre className="mt-4 p-4 border rounded bg-gray-100">
          {JSON.stringify(matchData, null, 2)}
        </pre>
      ) : (
        <p>Loading employer matches...</p>
      )}
    </div>
  );
};

export default AIEmployerMatchDashboard;
