import React, { useEffect, useState } from "react";
import { fetchSmartContracts } from "../services/smartContractService";

// Displays AI-generated smart contracts & validation insights.

const SmartContractDashboard = () => {
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSmartContracts()
      .then((data) => {
        setContract(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching smart contract:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Smart Contract Dashboard</h2>
      {loading && <p>Loading contract data...</p>}
      {!loading && contract && (
        <div>
          <h4>Contract Hash:</h4>
          <p>{contract.contract_hash}</p>
          <h4>Contract Data:</h4>
          <pre>{JSON.stringify(contract.contract_data, null, 2)}</pre>
        </div>
      )}
      {!loading && !contract && <p>No contract data available.</p>}
    </div>
  );
};

export default SmartContractDashboard;
