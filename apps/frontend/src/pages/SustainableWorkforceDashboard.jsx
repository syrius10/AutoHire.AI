import { useEffect, useState } from "react";
import { fetchSustainabilityReport } from "../services/sustainableWorkforceService";

// AI-powered workforce sustainability planning

export default function SustainableWorkforceDashboard() {
  const [sustainabilityData, setSustainabilityData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchSustainabilityReport();
      setSustainabilityData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🌱 Workforce Sustainability Dashboard</h2>
      {sustainabilityData ? (
        <pre className="mt-4 p-4 border rounded">{JSON.stringify(sustainabilityData, null, 2)}</pre>
      ) : (
        <p>Loading sustainability insights...</p>
      )}
    </div>
  );
}
