import React, { useEffect, useState } from "react";
import { fetchWorkforceIntegration } from "../services/workforceIntegrationService";

// Displays AI-driven workforce integration insights for M&A planning.

const WorkforceIntegrationDashboard = () => {
  const [integrationData, setIntegrationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkforceIntegration()
      .then((data) => {
        setIntegrationData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching workforce integration data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard">
      <h2>Workforce Integration Analysis</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(integrationData, null, 2)}</pre>
      )}
    </div>
  );
};

export default WorkforceIntegrationDashboard;
