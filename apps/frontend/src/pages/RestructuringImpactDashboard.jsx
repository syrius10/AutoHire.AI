import React, { useEffect, useState } from "react";
import { fetchRestructuringImpact } from "../services/restructuringImpactService";

// Monitors the predicted impact of workforce restructuring.

const RestructuringImpactDashboard = () => {
  const [impactData, setImpactData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestructuringImpact()
      .then((data) => {
        setImpactData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching restructuring impact data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard">
      <h2>Restructuring Impact Forecast</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(impactData, null, 2)}</pre>
      )}
    </div>
  );
};

export default RestructuringImpactDashboard;
