import { useState } from "react";
import {
  generateSmartContract,
  enforceSmartContract,
} from "../services/smartWorkContractsService";

// AI-powered smart work contract generation & enforcement dashboard.

export default function SmartWorkContractsDashboard() {
  const [contract, setContract] = useState(null);
  const [contractId, setContractId] = useState("");
  const [enforcementResult, setEnforcementResult] = useState(null);
  const [error, setError] = useState("");

  const handleGenerateContract = async () => {
    try {
      const response = await generateSmartContract(
        "EmployerX",
        "FreelancerY",
        "Standard Work Agreement",
      );
      setContract(response);
      setContractId(response.contractId);
    } catch (err) {
      setError("Failed to generate contract.");
    }
  };

  const handleEnforceContract = async () => {
    if (!contractId) {
      setError("Contract ID is required for enforcement.");
      return;
    }

    try {
      const response = await enforceSmartContract(contractId);
      setEnforcementResult(response);
    } catch (err) {
      setError("Failed to enforce contract.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📜 Smart Work Contracts</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGenerateContract}
      >
        Generate Smart Contract
      </button>
      {contract && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">
          {JSON.stringify(contract, null, 2)}
        </pre>
      )}

      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleEnforceContract}
      >
        Enforce Contract
      </button>
      {enforcementResult && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">
          {JSON.stringify(enforcementResult, null, 2)}
        </pre>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
