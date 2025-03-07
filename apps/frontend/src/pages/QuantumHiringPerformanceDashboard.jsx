import { useEffect, useState } from "react";
import { fetchQuantumHiringPerformance } from "../services/quantumHiringPerformanceService";

// AI-based next-gen hiring & performance modeling insights.

export default function QuantumHiringPerformanceDashboard() {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchQuantumHiringPerformance();
      setPerformanceData(data);
    }
    loadData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Quantum Hiring & Performance Modeling</h1>
      {performanceData ? (
        <pre>{JSON.stringify(performanceData, null, 2)}</pre>
      ) : (
        <p>Loading hiring performance insights...</p>
      )}
    </div>
  );
}
