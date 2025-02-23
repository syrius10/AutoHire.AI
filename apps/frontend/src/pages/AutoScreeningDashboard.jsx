import { useState, useEffect } from "react";
import { autoScreenCandidate } from "../services/autoScreeningService";

const AutoScreeningDashboard = ({ candidateId, jobId }) => {
  const [matchScore, setMatchScore] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    autoScreenCandidate(candidateId, jobId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setMatchScore(data.matchScore);
      }
    });
  }, [candidateId, jobId]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">AI-Powered Screening</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : matchScore !== null ? (
        <p className="text-lg">Match Score: {matchScore.toFixed(2)}%</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AutoScreeningDashboard;