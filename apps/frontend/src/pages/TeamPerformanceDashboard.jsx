import { useState } from "react";
import { analyzeTeamPerformance } from "../services/teamPerformanceService";

// AI-driven team collaboration & performance optimization

export default function TeamPerformanceDashboard() {
  const [scores, setScores] = useState({
    collaboration: 3,
    productivity: 3,
    communication: 3,
  });
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    const result = await analyzeTeamPerformance(
      scores.collaboration,
      scores.productivity,
      scores.communication,
    );
    setAnalysis(result);
  };

  return (
    <div>
      <h1>Team Performance Analysis</h1>
      <label htmlFor="collaboration">Collaboration Score: </label>
      <input
        id="collaboration"
        type="number"
        value={scores.collaboration}
        onChange={(e) =>
          setScores({ ...scores, collaboration: e.target.value })
        }
      />
      <label htmlFor="productivity">Productivity Score: </label>
      <input
        id="productivity"
        type="number"
        value={scores.productivity}
        onChange={(e) => setScores({ ...scores, productivity: e.target.value })}
      />
      <label htmlFor="communication">Communication Score: </label>
      <input
        id="communication"
        type="number"
        value={scores.communication}
        onChange={(e) =>
          setScores({ ...scores, communication: e.target.value })
        }
      />
      <button onClick={handleAnalyze}>Analyze</button>

      {analysis && <pre>{JSON.stringify(analysis, null, 2)}</pre>}
    </div>
  );
}
