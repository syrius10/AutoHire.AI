import React, { useState, useEffect } from "react";
import { fetchContractRisk } from "../services/contractRiskAssessmentService";

// Displays AI-driven contract risk assessment insights

const ContractRiskAssessmentDashboard = () => {
  const [risks, setRisks] = useState([]);

  useEffect(() => {
    const loadRisks = async () => {
      const data = await fetchContractRisk();
      setRisks(data);
    };
    loadRisks();
  }, []);

  return (
    <div>
      <h1>Freelance Contract Risk Assessment</h1>
      <ul>
        {risks.map((contract) => (
          <li key={contract.id}>
            {contract.clientName} - Risk Level: {contract.riskLevel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractRiskAssessmentDashboard;
