import { useEffect, useState } from "react";
import { fetchCrossBorderContracts } from "../services/crossBorderContractsService";

// AI-driven cross-border employment contract management

export default function CrossBorderContractsDashboard() {
  const [contracts, setContracts] = useState(null);

  useEffect(() => {
    async function loadData() {
      const result = await fetchCrossBorderContracts();
      setContracts(result);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Cross-Border Job Contracts</h1>
      {contracts ? (
        <pre>{JSON.stringify(contracts, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
