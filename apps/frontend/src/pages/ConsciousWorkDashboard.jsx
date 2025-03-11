import { useEffect, useState } from "react";
import { fetchConsciousDecision } from "../services/consciousWorkService";

// AI-powered workplace AI with human-like decision-making.

const ConsciousWorkDashboard = () => {
  const [decision, setDecision] = useState(null);
  const [scenario, setScenario] = useState("");

  const handleFetchDecision = async () => {
    if (!scenario) return;
    const result = await fetchConsciousDecision(scenario);
    setDecision(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🧠 Conscious AI Decision-Making</h2>
      <input
        type="text"
        className="border p-2 rounded mt-4 w-full"
        placeholder="Enter a workplace scenario..."
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
      />
      <button
        onClick={handleFetchDecision}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Get AI Decision
      </button>
      {decision && (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>AI Decision:</strong> {decision}
          </p>
        </div>
      )}
    </div>
  );
};

export default ConsciousWorkDashboard;
