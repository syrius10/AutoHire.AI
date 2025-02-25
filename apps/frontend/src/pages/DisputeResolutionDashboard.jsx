import React, { useEffect, useState } from "react";
import { fetchDisputeStatus } from "../services/disputeResolutionService";

// AI-powered dispute resolution & claim tracking.

const DisputeResolutionDashboard = () => {
  const [resolution, setResolution] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDisputeStatus()
      .then((data) => {
        setResolution(data.resolution);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error resolving dispute:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Dispute Resolution Dashboard</h2>
      {loading ? <p>Analyzing dispute...</p> : <p>Resolution Status: {resolution}</p>}
    </div>
  );
};

export default DisputeResolutionDashboard;
