import { useEffect, useState } from "react";
import { fetchSalaryBenchmark } from "../services/multiCountrySalaryService";

// AI-based global salary benchmarking for recruiters & candidates.

export default function MultiCountrySalaryDashboard() {
  const [salaryData, setSalaryData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchSalaryBenchmark({
        economyScore: 75,
        industryDemand: "Tech",
        experience: 7,
      });
      setSalaryData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">💰 Global Salary Benchmarking</h2>
      {salaryData ? (
        <pre className="mt-4 border p-4 rounded bg-gray-100">
          {JSON.stringify(salaryData, null, 2)}
        </pre>
      ) : (
        <p>Fetching salary insights...</p>
      )}
    </div>
  );
}
