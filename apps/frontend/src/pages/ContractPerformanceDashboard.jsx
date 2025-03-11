import { useState } from "react";
import { monitorContractPerformance } from "../services/contractPerformanceService";

// AI-powered contract performance monitoring dashboard.

export default function ContractPerformanceDashboard() {
  const [contractId, setContractId] = useState("");
  const [performanceData, setPerformanceData] = useState(null);
  const [error, setError] = useState("");

  const handleMonitorPerformance = async () => {
    if (!contractId) {
      setError("Please enter a contract ID.");
      return;
    }

    try {
      const response = await monitorContractPerformance(contractId);
      setPerformanceData(response);
    } catch (err) {
      setError("Failed to fetch contract performance data.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📈 Contract Performance Monitoring</h2>
      <input
        type="text"
        placeholder="Enter Contract ID"
        value={contractId}
        onChange={(e) => setContractId(e.target.value)}
        className="border px-4 py-2 rounded w-full mt-2"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleMonitorPerformance}
      >
        Monitor Contract Performance
      </button>

      {performanceData && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">
          {JSON.stringify(performanceData, null, 2)}
        </pre>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
