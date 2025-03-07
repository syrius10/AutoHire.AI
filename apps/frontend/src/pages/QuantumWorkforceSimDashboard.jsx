import { useEffect, useState } from "react";
import { fetchQuantumWorkforceSim } from "../services/quantumWorkforceSimService";

// AI-powered quantum workforce simulation & analysis.

export default function QuantumWorkforceSimDashboard() {
  const [simulationData, setSimulationData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchQuantumWorkforceSim();
      setSimulationData(data);
    }
    loadData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Quantum Workforce Simulation</h1>
      {simulationData ? (
        <pre>{JSON.stringify(simulationData, null, 2)}</pre>
      ) : (
        <p>Loading simulation results...</p>
      )}
    </div>
  );
}
