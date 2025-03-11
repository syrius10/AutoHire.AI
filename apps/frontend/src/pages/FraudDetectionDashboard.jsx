import React, { useEffect, useState } from "react";
import { fetchFraudAnalysis } from "../services/fraudDetectionService";

// Monitors AI-detected fraud risks in freelancer payments.

const FraudDetectionDashboard = () => {
  const [fraudRisk, setFraudRisk] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFraudAnalysis()
      .then((data) => {
        setFraudRisk(data.fraud_risk);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error detecting fraud:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Fraud Detection Dashboard</h2>
      {loading ? (
        <p>Analyzing transactions...</p>
      ) : (
        <p>Fraud Risk: {fraudRisk}</p>
      )}
    </div>
  );
};

export default FraudDetectionDashboard;
