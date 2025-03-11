import { useEffect, useState } from "react";
import { fetchSmartContracts } from "../services/blockchainContractsService";

// AI-driven smart contract management.

export default function BlockchainContractsDashboard() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    async function loadContracts() {
      const data = await fetchSmartContracts();
      setContracts(data);
    }
    loadContracts();
  }, []);

  return (
    <div>
      <h1>📜 AI-Generated Smart Contracts</h1>
      <ul>
        {contracts.length > 0 ? (
          contracts.map((contract) => (
            <li key={contract.id}>
              Contract ID: {contract.id} - Status: {contract.status}
            </li>
          ))
        ) : (
          <p>Loading smart contracts...</p>
        )}
      </ul>
    </div>
  );
}
