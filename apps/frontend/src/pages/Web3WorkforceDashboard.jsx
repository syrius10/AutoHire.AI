import { useEffect, useState } from "react";
import { fetchWeb3WorkforceData } from "../services/web3WorkforceService";

// AI-powered Web3 hiring & blockchain-based payments

export default function Web3WorkforceDashboard() {
  const [workforceData, setWorkforceData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchWeb3WorkforceData();
      setWorkforceData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🌐 Web3 Workforce Hiring & Payments</h2>
      {workforceData ? (
        <pre className="mt-4 p-4 border rounded bg-gray-100">{JSON.stringify(workforceData, null, 2)}</pre>
      ) : (
        <p>Loading Web3 workforce insights...</p>
      )}
    </div>
  );
}
