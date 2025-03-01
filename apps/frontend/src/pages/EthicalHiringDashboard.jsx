import { useEffect, useState } from "react";
import { fetchEthicalHiringReport } from "../services/ethicalHiringService";

// AI-based hiring bias detection & ethical enforcement

export default function EthicalHiringDashboard() {
  const [biasReport, setBiasReport] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchEthicalHiringReport();
      setBiasReport(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚖️ Ethical Hiring Dashboard</h2>
      {biasReport ? (
        <pre className="mt-4 p-4 border rounded">{JSON.stringify(biasReport, null, 2)}</pre>
      ) : (
        <p>Loading hiring bias insights...</p>
      )}
    </div>
  );
}
