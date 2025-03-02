import { useState } from "react";
import { fetchWorkforceAllocation } from "../services/globalWorkforceOrchestratorService";

// AI-powered global workforce coordination & automation.

const GlobalWorkforceOrchestratorDashboard = () => {
  const [region, setRegion] = useState("");
  const [demand, setDemand] = useState("");
  const [supply, setSupply] = useState("");
  const [allocation, setAllocation] = useState(null);

  const handleOrchestration = async () => {
    const result = await fetchWorkforceAllocation(region, Number(demand), Number(supply));
    setAllocation(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🌍 Global Workforce Orchestrator</h2>
      <input
        type="text"
        placeholder="Region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="border p-2 mt-4 w-full"
      />
      <input
        type="number"
        placeholder="Demand"
        value={demand}
        onChange={(e) => setDemand(e.target.value)}
        className="border p-2 mt-2 w-full"
      />
      <input
        type="number"
        placeholder="Supply"
        value={supply}
        onChange={(e) => setSupply(e.target.value)}
        className="border p-2 mt-2 w-full"
      />
      <button onClick={handleOrchestration} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Allocate Workforce
      </button>
      {allocation && <pre className="mt-4 bg-gray-100 p-4 rounded">{JSON.stringify(allocation, null, 2)}</pre>}
    </div>
  );
};

export default GlobalWorkforceOrchestratorDashboard;
